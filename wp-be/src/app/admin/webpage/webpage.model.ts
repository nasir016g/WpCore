export class BaseModel {
    id: number = -1 ;
}


export class WebPage extends BaseModel {    
    parentId: number;
    virtualPath: string;
    navigationName: string;
    displayOrder = 1;
    visible = false;
    allowAnonymousAccess = false;
    metaKeywords: string;
    metaDescription: string;
    metaTitle: string;
    roles: WebPageRoleModel[];
}

export class WebPageRoleModel {
    id: boolean;
    name: string;
}


