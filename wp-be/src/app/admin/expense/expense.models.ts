
export class Expense {
    id: number;
    name: string;
    description: string;
    category: string;
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
    category: string;
    amount: number;
    dateFrom: Date; 
    dateTo: Date;      
    expenseTags: any[] = [];
    expenseAccounts: any[] = [];
    expenseCategories: any[] = [];

    pageIndex: 1;

}

export class ExpenseSearchTotalsModel {
    totalAmount: string;
    sumPositive: string;
    sumNegative: string;

}

