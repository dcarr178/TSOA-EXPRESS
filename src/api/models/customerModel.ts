
export type CustomerStatus = 'Active' | 'Inactive';

export interface Customer {
  id: number,
  status: CustomerStatus,
  email: string,
  firstName: string,
  phoneNumbers: string[],
}

export interface NewCustomer {
  email: string,
  firstName: string,
  phoneNumbers: string[],
}
