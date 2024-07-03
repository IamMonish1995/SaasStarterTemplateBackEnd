import { MenusModal } from "./MenusSchema.js";
import { RolesModal } from "./RolesSchema.js";
import { SystemUsersModel } from "./SaasSystemUsersSchema.js";
import { StatusModal } from "./StatusSchema.js";
import { UserAccessModal } from "./UserAccessesSchema.js";
import { UsersModal } from "./UsersSchema.js";


const db = {
  MenusModal,
  RolesModal,
  SystemUsersModel,
  UserAccessModal,
  UsersModal,
  StatusModal
};

export default db;
