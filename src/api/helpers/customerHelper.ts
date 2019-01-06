import { iCustomer, iCustomerToCreate } from '../models/customerModel';

export const getCustomerById = async (customerId): Promise<iCustomer> => {

  // todo someday look up customer in database for real
  const customer: iCustomer = {
    id: 1,
    email: 'joe@apple.com',
    firstName: 'Joe',
    status: 'Active',
    phoneNumbers: [
      '8012318713',
    ],
  };
  return customer;

};



export const createCustomer = async (customerToCreate: iCustomerToCreate): Promise<iCustomer> => {

  // todo someday create customer in database and get customer id
  const newCustomer: iCustomer = {
    id: 5,
    status: 'Active',
    firstName: customerToCreate.firstName,
    email: customerToCreate.email,
    phoneNumbers: customerToCreate.phoneNumbers,
  };
  return newCustomer;

};

export const deleteCustomer = async (customerId: number): Promise<boolean> => {

  // todo someday delete customer in database
  return true;

};
