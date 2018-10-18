export class BaseModel {
    id: number = -1 ;
}


export class WebPage extends BaseModel { 
    userHasCreateRights: boolean;
    availableSections: string[];   
    sections: Section[];
}

export class Section {
    id: boolean;
    userHasEditRights: boolean;
    userIsAdmin: boolean
}

export class SectionHtml extends Section {
   html: string 
}