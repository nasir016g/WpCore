
export class Expense {
    id: number;
    name: string;
    description: string;
    amount: number;
    date: string;
    notifications: string;
    isDebit: boolean;
    code: string;
    transactionType: string;
    expenseTags: string;
    expenseAccount: ExpenseAccount;
    expenseCategory: ExpenseCategory;
}

export class ExpenseAccount {
    name: string;
    description: string;
}

export class ExpenseCategory {
    name: string;
    description: string;
    color: string;
}

