using Microsoft.EntityFrameworkCore.Migrations;

namespace Wp.Data.Migrations.WpDb
{
    public partial class RemovedExpenseProperties : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
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
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Code",
                table: "Expense",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsDebit",
                table: "Expense",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "Notifications",
                table: "Expense",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "TransactionType",
                table: "Expense",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
