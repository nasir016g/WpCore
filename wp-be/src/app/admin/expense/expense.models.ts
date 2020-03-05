
export class Expense {
    id: number;
    name: string;
    description: string;
    amount: number;
    date: string;    
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

export class ExpenseTag {
    id: number;
    name: string;
}

export class ExpenseSearchModel {
    id: number;
    name: string;
    description: string;
    amount: number;
    dateFrom: string; 
    dateTo: string;      
    expenseTags: string;
    expenseAccount: ExpenseAccount;
    expenseCategory: ExpenseCategory;
}

