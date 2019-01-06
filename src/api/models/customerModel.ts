
export type iCustomerStatus = 'Active' | 'Inactive';

export interface iCustomer {
  id: number,
  status: iCustomerStatus,
  email: string,
  firstName: string,
  phoneNumbers: string[],
}

export interface iCustomerToCreate {
  email: string,
  firstName: string,
  phoneNumbers: string[],
}
