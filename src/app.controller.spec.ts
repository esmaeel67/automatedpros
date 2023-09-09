import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);

  });
 
  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });


  describe('findPaireWithSum', () => {   
    it('findPaireWithSum should return array list ', () => {
      const arr = [2, 7, 4, 0, 9, 5, 1, 3];
      const target = 7;      
      const result = appController.findPaireWithSum(arr, target);  
      expect(result).toBeDefined();
      expect(result.length).toEqual(3);      
      console.log('result : ', result);
    });
  });



});
