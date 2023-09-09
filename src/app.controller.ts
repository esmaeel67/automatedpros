import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController { 

  /**
   * proccess paire number
   * @param {number[]} arr 
   * @param {number} target 
   * @returns {number[][]} return paire number list
   */
  findPaireWithSum(arr: number[], target: number): number[][] {
    // result array list number
    let result = [];
    
    // add list number for check duplicate
    let indexes = [];
    for (let i = 0; i <= arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        // check array index i + next number equal target
        // and check this number is not exists in the indexes array
        if (
          target === arr[i] + arr[j] &&
          !indexes.includes(i) &&
          !indexes.includes(j)
        ) {
          result.push([arr[i], arr[j]]);
          indexes.push(i);
          indexes.push(j);
          break;
        }
      }
    }    
    return result;
  }

  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
