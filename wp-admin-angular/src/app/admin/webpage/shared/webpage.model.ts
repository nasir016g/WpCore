export class BaseModel {
    id: number = -1 ;
}


export class WebPage extends BaseModel {    
    parentId: number;
    virtualPath: string;
    navigationName: string;
    displayOrder: number;
    visible: boolean;
    allowAnonymousAccess: boolean;
    metaKeywords: string;
    metaDescription: string;
    metaTitle: string;
    roles: WebPageRoleModel[];
}

export class WebPageRoleModel {
    id: boolean;
    name: string;
}


