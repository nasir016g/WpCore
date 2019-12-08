
export class UserModel {
    name: string;
    password: string;
    roles: RoleModel[];
    selectedRoles: string[];
}

export class RoleModel {
    name: string;
    isSystemRole: boolean;
    isChecked: boolean;
}
 