export class Expense {
    id: number;
    name: string;
    description: string;
    value: number;
    date: string;
    expenseAccount: ExpenseAccount;
    expenseCategory: ExpenseCategory;
}

export class ExpenseAccount {
    name: string;
    description: string;
}

export class ExpenseCategory{
    name: string;
    description: string;
    color: string;
}