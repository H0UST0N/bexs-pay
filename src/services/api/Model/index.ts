/**
 * @namespace Model
 */

import GenericDAO from "../GenericDAO";

 const route = 'model';
 
 export interface IGetModel {
    id: number;
    description: string;
  }
 
 export interface IPostModel {
    id?: number;
    description: string;
 }
 
 const get = async (): Promise<IGetModel[]> => GenericDAO.get(route);
 
 const getById = async (id: number): Promise<IGetModel> => GenericDAO.get(route, id);
 
 const save = async (data: IPostModel) => GenericDAO.save(route, data);
 
 const edit = async (data: IPostModel, id: number) => GenericDAO.save(route, data, id);
 
 export default {
   get,
   getById,
   save,
   edit
 };
 