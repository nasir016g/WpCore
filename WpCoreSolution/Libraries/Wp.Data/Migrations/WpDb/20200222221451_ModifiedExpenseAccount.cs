using Microsoft.EntityFrameworkCore.Migrations;

namespace Wp.Data.Migrations.WpDb
{
    public partial class ModifiedExpenseAccount : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Account",
                table: "ExpenseAccount",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Account",
                table: "ExpenseAccount");
        }
    }
}
