import {Get, Post, Delete, Tags, Route, Body, Path, Header, SuccessResponse, Controller } from 'tsoa';
import { Customer, NewCustomer } from '../models/customerModel';
import { getCustomerById, createCustomer, deleteCustomer } from '../helpers/customerHelper';

@Route('customer')
@Tags('Customer Information')
export class customerController extends Controller {

  /**
   * Query any customer by customerId
   */
  @Get('{customerId}')
  public async getCustomerEndpoint(@Path() customerId: number): Promise<Customer> {
    return getCustomerById(customerId);
  }

  /**
   * Create a customer record
   */
  @SuccessResponse('201', 'Created') // Custom success response
  @Post()
  public async createCustomerEndpoint(@Body() newCustomer: NewCustomer): Promise<Customer> {
    this.setStatus(201); // set return status 201
    return createCustomer(newCustomer);
  }

  /**
   * Delete a customer record
   */
  @SuccessResponse('202', 'Deleted') // Custom success response
  @Delete('{customerId}')
  public async deleteCustomerEndpoint(customerId: number, @Header('Authorization') authorization: string): Promise<void> {
    const result = await deleteCustomer(customerId);
    if (result) {
      this.setStatus(202); // succeeded
    } else {
      this.setStatus(404); // failed
    }
  }

}