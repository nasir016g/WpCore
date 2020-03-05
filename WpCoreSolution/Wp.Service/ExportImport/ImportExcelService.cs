using OfficeOpenXml;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using Wp.Core.Domain.Expenses;
using Wp.Services.Expenses;
using Wp.Services.ExportImport.Help;
using Wp.Core.Common;

namespace Wp.Services.ExportImport
{
    public class ImportExcelService : IImportExcelService
    {
        private readonly IExpenseService _expenseService;
        private readonly IExpenseAccountService _expenseAccountService;
        private readonly IExpenseCategoryService _expenseCategoryService;
        private readonly IExpenseTagService _expenseTagService;

        public ImportExcelService(IExpenseService expenseService, IExpenseAccountService expenseAccountService, IExpenseCategoryService expenseCategoryService, IExpenseTagService expenseTagService)
        {
            _expenseService = expenseService;
            _expenseAccountService = expenseAccountService;
            _expenseCategoryService = expenseCategoryService;
            _expenseTagService = expenseTagService;
        }

        private ExpenseCategory GetExpenseCategoryByName(string name = "")
        {
            //Household goods wikipedia
            ExpenseCategory expenseCategory = _expenseCategoryService.GetAll().First(x => x.Name == "Others");

            if (name == null)
                return expenseCategory;

            if (name.Contains("SHELL", StringComparison.InvariantCultureIgnoreCase)
                || name.Contains("37-RDJ-5", StringComparison.InvariantCultureIgnoreCase)
                || name.Contains("16-SJD-2", StringComparison.InvariantCultureIgnoreCase))
            {
                expenseCategory = _expenseCategoryService.GetAll().FirstOrDefault(x => x.Name == "Car");
            }
            else if (name.Contains("Zalando", StringComparison.InvariantCultureIgnoreCase)
               || name.Contains("PRIMARK", StringComparison.InvariantCultureIgnoreCase))
            {
                expenseCategory = _expenseCategoryService.GetAll().FirstOrDefault(x => x.Name == "Clothes");
            }
            else if (name.Contains("ICS-klantnummer 68037960017", StringComparison.InvariantCultureIgnoreCase))
            {
                expenseCategory = _expenseCategoryService.GetAll().FirstOrDefault(x => x.Name == "CreditAccount");
            }
            else if (name.Contains("ALBERT")
                || name.Contains("AH")
                || name.Contains("Kruidvat", StringComparison.InvariantCultureIgnoreCase))
            {
                expenseCategory = _expenseCategoryService.GetAll().FirstOrDefault(x => x.Name == "Groceries");
            }
            else if (name.Contains("UNIVE ZORG", StringComparison.InvariantCultureIgnoreCase))
            {
                expenseCategory = _expenseCategoryService.GetAll().FirstOrDefault(x => x.Name == "Health (Insurance)");
            }
            else if (name.Contains("Intratuin", StringComparison.InvariantCultureIgnoreCase)
               || name.Contains("Coolblue", StringComparison.InvariantCultureIgnoreCase))
            {
                expenseCategory = _expenseCategoryService.GetAll().FirstOrDefault(x => x.Name == "Household Goods");
            }
            else if (name.Contains("UNIVE", StringComparison.InvariantCultureIgnoreCase))
            {
                expenseCategory = _expenseCategoryService.GetAll().FirstOrDefault(x => x.Name == "Insurance");
            }
            else if (name.Contains("UNIVE", StringComparison.InvariantCultureIgnoreCase))
            {
                expenseCategory = _expenseCategoryService.GetAll().FirstOrDefault(x => x.Name == "Insurance");
            }
            else if (name.Contains("ov", StringComparison.InvariantCultureIgnoreCase))
            {
                expenseCategory = _expenseCategoryService.GetAll().FirstOrDefault(x => x.Name == "Public Transport");
            }
            else if (name.Contains("BEN NEDERLAND", StringComparison.InvariantCultureIgnoreCase)
                || name.Contains("ESSENT", StringComparison.InvariantCultureIgnoreCase)
                || name.Contains("VITENS", StringComparison.InvariantCultureIgnoreCase)
                || name.Contains("NETFLIX", StringComparison.InvariantCultureIgnoreCase)
                || name.Contains("Telfort Thuis", StringComparison.InvariantCultureIgnoreCase))
            {
                expenseCategory = _expenseCategoryService.GetAll().FirstOrDefault(x => x.Name == "Utilities");
            }           

            return expenseCategory;
        }

        private string[] GetExpenseTagsByName(string name)
        {
            var result = new List<string>();
            if (name.Contains("BEN NEDERLAND", StringComparison.InvariantCultureIgnoreCase))
            {
                result.Add("cell-phone");
            }
            else if (name.Contains("SHELL", StringComparison.InvariantCultureIgnoreCase))
            {
                result.Add("car-gas");
            }
            else if (name.Contains("ESSENT", StringComparison.InvariantCultureIgnoreCase))
            {
                result.Add("gas-electricity");
            }
            else if (name.Contains("VITENS", StringComparison.InvariantCultureIgnoreCase))
            {
                result.Add("water");
            }
            else if (name.Contains("37-RDJ-5", StringComparison.InvariantCultureIgnoreCase)
                || name.Contains("16-SJD-2", StringComparison.InvariantCultureIgnoreCase))
            {
                result.Add("tax");
            }
            else if (name.Contains("BasisPakket", StringComparison.InvariantCultureIgnoreCase)
                || name.Contains("BetaalGemak", StringComparison.InvariantCultureIgnoreCase))
            {
                result.Add("bank-costs");
            }
            else if (name.Contains("H Ahmadi", StringComparison.InvariantCultureIgnoreCase))
            {
                result.Add("hiela");
            }
            else if (name.Contains("S Ahmadi", StringComparison.InvariantCultureIgnoreCase))
            {
                result.Add("sweley");
            }
            else if (name.Contains("ALBERT") || name.Contains("AH"))
            {
                result.Add("albert-heijn");
            }

            return result.ToArray();
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



                    string descriptionName = "Notifications";
                    string dateName = "Date";
                    if (!manager.GetProperties.Any(x => x.PropertyName == "Notifications"))
                    {
                        descriptionName = "Omschrijving";
                        dateName = "Transactiedatum";
                    }


                    var expense = _expenseService.GetByDescription(manager.GetProperty(descriptionName).StringValue, manager.GetProperty(dateName).DateTime);

                    var isNew = expense == null;

                    expense = expense ?? new Expense();

                    if (isNew)
                    {
                        expense.CreatedOn = DateTime.Now;
                        expense.UpdatedOn = DateTime.Now;


                        foreach (var property in manager.GetProperties)
                        {
                            switch (property.PropertyName)
                            {
                                case "Date": //ing
                                case "Transactiedatum": //abn 
                                    expense.Date = property.DateTime;
                                    break;
                                case "Name / Description": //ing
                                    expense.Name = property.StringValue;
                                    break;
                                case "Account": //ing
                                case "Rekeningnummer": //abn 
                                    expense.ExpenseAccount = _expenseAccountService.GetByAccount(property.StringValue);
                                    break;
                                case "Amount (EUR)": //ing                                    
                                    expense.Amount = property.DecimalValueCommaDecimalSeparator;
                                    if (manager.GetProperty("Debit/credit").StringValue == "Debit")
                                    {
                                        expense.Amount *= -1;
                                    }
                                    break;
                                case "Transactiebedrag": //abn                                   
                                    expense.Amount = property.DecimalValue;
                                    break;
                                case "Notifications": //ing
                                    expense.Description = property.StringValue;
                                    break;
                                case "Omschrijving": //abn
                                    expense.Description = property.StringValue;
                                    if (expense.Description.Contains("Naam:"))
                                    {
                                        expense.Name = expense.Description.GetBetween("Naam:", "  ");
                                    }
                                    else if (expense.Description.Contains("NAME/"))
                                    {
                                        expense.Name = expense.Description.GetBetween("NAME/", "/");
                                    }
                                    else
                                    {
                                        if (expense.Description.Length > 50)
                                            expense.Name = expense.Description.Substring(0, 50);
                                        else
                                            expense.Name = expense.Description;
                                    }
                                    break;
                            }
                        }

                        expense.ExpenseCategory = GetExpenseCategoryByName(expense.Name + expense.Description);

                        _expenseService.Insert(expense);
                        _expenseTagService.UpdateExpenseTags(expense, GetExpenseTagsByName(expense.Name + expense.Description));

                    }
                    iRow++;
                }
            }
        }
    }
}
