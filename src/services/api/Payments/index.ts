/**
 * @namespace Payments
 */

import GenericDAO from "../GenericDAO";

const route = 'payments';

export interface IPayment {
  id: string;
  numeroCartao: string;
  nome: string;
  validade: string;
  cvv: string;
  numeroParcelas: string;
}

export interface IPostPayment {
  id?: string;
  numeroCartao: string;
  nome: string;
  validade: string;
  cvv: string;
  numeroParcelas: string;
}

const get = async (): Promise<IPayment[]> => GenericDAO.get(route);

const getById = async (id: string): Promise<IPayment> => GenericDAO.get(route, id);

const save = async (data: IPostPayment) => GenericDAO.save(route, data);

const edit = async (data: IPostPayment, id: string) => GenericDAO.save(route, data, id);

export default {
  get,
  getById,
  save,
  edit
};
