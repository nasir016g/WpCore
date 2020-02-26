using OfficeOpenXml;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using Wp.Core.Domain.Expenses;
using Wp.Services.Expenses;
using Wp.Services.ExportImport.Help;

namespace Wp.Services.ExportImport
{
    public class ImportExcelService : IImportExcelService
    {
        private readonly IExpenseService _expenseService;
        private readonly IExpenseAccountService _expenseAccountService;
        private readonly IExpenseCategoryService _expenseCategoryService;

        public ImportExcelService(IExpenseService expenseService, IExpenseAccountService expenseAccountService, IExpenseCategoryService expenseCategoryService)
        {
            _expenseService = expenseService;
            _expenseAccountService = expenseAccountService;
            _expenseCategoryService = expenseCategoryService;
        }

        public static IList<PropertyByName<T>> GetPropertiesByExcelCells<T>(ExcelWorksheet worksheet)
        {
            var properties = new List<PropertyByName<T>>();
            var poz = 1;
            while (true)
            {
                try
                {
                    var cell = worksheet.Cells[1, poz];

                    if (string.IsNullOrEmpty(cell?.Value?.ToString()))
                        break;

                    poz += 1;
                    properties.Add(new PropertyByName<T>(cell.Value.ToString()));
                }
                catch
                {
                    break;
                }
            }

            return properties;
        }


        public void ImportExpensesFromXlsx(Stream stream)
        {
            using (var xlPackage = new ExcelPackage(stream))
            {
                // get the first worksheet in the workbook
                var worksheet = xlPackage.Workbook.Worksheets.FirstOrDefault();
                if (worksheet == null)
                    throw new Exception("No worksheet found");

                //the columns
                var properties = GetPropertiesByExcelCells<Expense>(worksheet);

                var manager = new PropertyManager<Expense>(properties);

                var iRow = 2;
                var setSeName = properties.Any(p => p.PropertyName == "Notifications");
                var expenseCategory = _expenseCategoryService.GetAll().FirstOrDefault();
                while (true)
                {
                    var allColumnsAreEmpty = manager.GetProperties
                        .Select(property => worksheet.Cells[iRow, property.PropertyOrderPosition])
                        .All(cell => cell?.Value == null || string.IsNullOrEmpty(cell.Value.ToString()));

                    if (allColumnsAreEmpty)
                        break;

                    manager.ReadFromXlsx(worksheet, iRow);

                    var expense = _expenseService.GetByNotifications(manager.GetProperty("Notifications").StringValue);

                    var isNew = expense == null;

                    expense = expense ?? new Expense();

                    if (isNew)
                    {
                        expense.CreatedOn = DateTime.Now;
                        expense.UpdatedOn = DateTime.Now;
                        expense.ExpenseCategory = expenseCategory;

                        foreach (var property in manager.GetProperties)
                        {
                            switch (property.PropertyName)
                            {
                                case "Date":
                                    expense.Date = property.DateTime;
                                    break;
                                case "Name / Description":
                                    expense.Name = property.StringValue;
                                    break;
                                case "Account":
                                    expense.ExpenseAccount = _expenseAccountService.GetByAccount(property.StringValue);
                                    break;
                                case "Code":
                                    expense.Code = property.StringValue;
                                    break;
                                case "Debit/credit":
                                    expense.IsDebit = property.StringValue == "Debit";
                                    break;
                                case "Amount (EUR)":
                                    expense.Amount = property.DecimalValueCommaDecimalSeparator;
                                    break;
                                case "Transaction type":
                                    expense.TransactionType = property.StringValue;
                                    break;
                                case "Notifications":
                                    expense.Notifications = property.StringValue;
                                    break;
                            }
                        }

                        _expenseService.Insert(expense);

                    }
                    iRow++;
                }
            }
        }
    }
}
