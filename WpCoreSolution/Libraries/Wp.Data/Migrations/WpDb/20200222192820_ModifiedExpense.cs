using Microsoft.EntityFrameworkCore.Migrations;

namespace Wp.Data.Migrations.WpDb
{
    public partial class ModifiedExpense : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Value",
                table: "Expense");

            migrationBuilder.AddColumn<decimal>(
                name: "Amount",
                table: "Expense",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<string>(
                name: "Code",
                table: "Expense",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsDebit",
                table: "Expense",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "Notifications",
                table: "Expense",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "TransactionType",
                table: "Expense",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Amount",
                table: "Expense");

            migrationBuilder.DropColumn(
                name: "Code",
                table: "Expense");

            migrationBuilder.DropColumn(
                name: "IsDebit",
                table: "Expense");

            migrationBuilder.DropColumn(
                name: "Notifications",
                table: "Expense");

            migrationBuilder.DropColumn(
                name: "TransactionType",
                table: "Expense");

            migrationBuilder.AddColumn<decimal>(
                name: "Value",
                table: "Expense",
                type: "decimal(18,2)",
                nullable: false,
                defaultValue: 0m);
        }
    }
}
