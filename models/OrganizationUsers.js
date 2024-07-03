import db from "../schema/db.js";

// save
export const saveOrganizationUsersModel = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const doc = new db.OrganizationUsersModel(data);
      const saved_document = await doc.save();
      resolve(saved_document);
    } catch (error) {
      reject(error);
    }
  });
};
export const getAllOrganizationUsersModel = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const docs = db.OrganizationUsersModel.find();
      resolve(docs);
    } catch (error) {
      reject(error);
    }
  });
};
