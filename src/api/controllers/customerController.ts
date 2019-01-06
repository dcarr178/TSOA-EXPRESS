import {Get, Post, Delete, Tags, Route, Body, Path, Header, SuccessResponse, Controller } from 'tsoa';
import { iCustomer, iCustomerToCreate } from '../models/customerModel';
import { getCustomerById, createCustomer, deleteCustomer } from '../helpers/customerHelper';

@Route('customer')
@Tags('Customer Information')
export class customerController extends Controller {

  @Get('{id}')
  public async getCustomerEndpoint(@Path() id: number): Promise<iCustomer> {
    return getCustomerById(id);
  }

  @SuccessResponse('201', 'Created') // Custom success response
  @Post()
  public async createCustomerEndpoint(@Body() requestBody: iCustomerToCreate): Promise<iCustomer> {
    this.setStatus(201); // set return status 201
    return createCustomer(requestBody);
  }

  @SuccessResponse('202', 'Deleted') // Custom success response
  @Delete('{id}')
  public async deleteCustomerEndpoint(id: number, @Header('Authorization') authorization: string): Promise<void> {
    const result = await deleteCustomer(id);
    if (result) {
      this.setStatus(202); // succeeded
    } else {
      this.setStatus(404); // failed
    }
  }

}