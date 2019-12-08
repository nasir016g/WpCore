import { RoleModel } from '../../security/user/user.model';

export class ClaimRoleModel {
    availableClaims: ClaimRecord[];
    availableRoles: RoleModel[];
    allowed: { [key: string]: {[key: string]: boolean} }
    //allowed: [][];
}

export class ClaimRecord {
    claimType: string;
    claimValue: string;
}

