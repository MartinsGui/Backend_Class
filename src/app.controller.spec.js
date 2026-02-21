import { Test } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController;

  beforeEach(async () => {
    const app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get(AppController);
  });

  describe('root', () => {
    it('should return "Welcome to central library!"', () => {
      expect(appController.getHello()).toBe('Welcome to central library!');
    });
  });

  describe('getBooksList', () => {
    it('should return "Book lists"', () => {
      const appController = new AppController();
      const bookList = appController.getBooksList();
      const expectedBookList = [
        {titulo:"Introducao ao JavaScrip",autor:"Huguinho Pato"},
        {titulo:"NodeJS for Dummys",autor:"Zezinho Pato"},
        {titulo:"Backends com NodeJS",autor:"Luizinho Pato"},
        {titulo:"Arquitetura de Software",autor:"Zezinho Pato"},
        {titulo:"Desenvolvendo para WEB",autor:"Huguinho Pato"},
        {titulo:"Microservicos",autor:"Zezinho Pato"}
      ];
      expect(bookList).toEqual(expectedBookList);


      expect(appController.getBooksList()).toBe(bookList);
    });
  });
});
