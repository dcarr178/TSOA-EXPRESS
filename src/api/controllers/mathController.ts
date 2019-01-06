import {Get, Post, Delete, Tags, Route, Body, Path, Header, SuccessResponse, Controller } from 'tsoa';

@Route('math')
@Tags('Fun with Math')
export class mathController extends Controller {

  /**
   * Double the number provided
   */
  @Get('double/{number}')
  public double(@Path() number: number): number {
    return number * 2;
  }

  /**
   * Triple the number provided
   */
  @Get('triple/{number}')
  public triple(@Path() number: number): number {
    return number * 3;
  }

  /**
   * Returns the square root of the number provided
   */
  @Get('squareroot/{number}')
  public squareRoot(@Path() number: number): number {
    return Math.sqrt(number);
  }

}