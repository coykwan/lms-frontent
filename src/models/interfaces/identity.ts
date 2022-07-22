import RoleRecord from "../view-models/role-record";
import UserRecord from "../view-models/user-record";

export interface Identity {
    role?: RoleRecord;
    user?: UserRecord;
}
