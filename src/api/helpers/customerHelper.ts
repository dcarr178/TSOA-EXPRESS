import { Customer, NewCustomer } from '../models/customerModel';

export const getCustomerById = async (customerId): Promise<Customer> => {

  // todo someday look up customer in database for real
  const customer: Customer = {
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



export const createCustomer = async (customerToCreate: NewCustomer): Promise<Customer> => {

  // todo someday create customer in database and get customer id
  const newCustomer: Customer = {
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
