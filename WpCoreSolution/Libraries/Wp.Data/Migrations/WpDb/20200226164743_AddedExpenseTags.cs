using Microsoft.EntityFrameworkCore.Migrations;

namespace Wp.Data.Migrations.WpDb
{
    public partial class AddedExpenseTags : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ExpenseTag",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(maxLength: 400, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ExpenseTag", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Expense_ExpenseTag_Mapping",
                columns: table => new
                {
                    Expense_Id = table.Column<int>(nullable: false),
                    ExpenseTag_Id = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Expense_ExpenseTag_Mapping", x => new { x.Expense_Id, x.ExpenseTag_Id });
                    table.ForeignKey(
                        name: "FK_Expense_ExpenseTag_Mapping_Expense_Expense_Id",
                        column: x => x.Expense_Id,
                        principalTable: "Expense",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Expense_ExpenseTag_Mapping_ExpenseTag_ExpenseTag_Id",
                        column: x => x.ExpenseTag_Id,
                        principalTable: "ExpenseTag",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Expense_ExpenseTag_Mapping_ExpenseTag_Id",
                table: "Expense_ExpenseTag_Mapping",
                column: "ExpenseTag_Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Expense_ExpenseTag_Mapping");

            migrationBuilder.DropTable(
                name: "ExpenseTag");
        }
    }
}
