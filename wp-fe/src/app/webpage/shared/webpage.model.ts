export class WebPage {    
    id: number;
    virtualPath: string;
    navigationName: string;
    sections: Section[];    
}

export class Section {
   
    constructor(id: number, userHasEditRights: boolean, userIsAdmin: boolean, controller: string) {
      this.id= id;
      this.userHasEditRights = userHasEditRights;
      this.userIsAdmin = userIsAdmin;
      this.controller = controller;

    }
    id: number;
    userHasEditRights: boolean;
    userIsAdmin: boolean;
    controller: string;
}

export class HtmlSection extends Section {
    constructor(id: number, userHasEditRights: boolean, userIsAdmin: boolean, controller: string, html: string) {
        super(id, userHasEditRights, userIsAdmin, controller);
        this.html = html;
    }
    html:string;
}
