import { Test } from '@nestjs/testing';
import { AppController } from './app.controller';
import { Acervo, Metrics } from './app.service';

describe('AppController', () => {
  let appController;

  beforeEach(async () => {
    const app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [Acervo, Metrics],
    }).compile();

    appController = app.get(AppController);
  });

  describe('root', () => {
    it('should return "Welcome to central library!"', () => {
      const appController = new AppController();
      expect(appController.getHello()).toBe('Welcome to central library!');
    });
  });

  describe('getBooksList', () => {
    it('should return "Book lists"', () => {
      const acervo = new Acervo();
      const bookList = acervo.getBooksList(expectedBookList);
      const expectedBookList = [
        {titulo:"Introducao ao JavaScrip",autor:"Huguinho Pato", ano: 2020},
        {titulo:"NodeJS for Dummys",autor:"Zezinho Pato", ano: 2021},
        {titulo:"Backends com NodeJS",autor:"Luizinho Pato", ano: 2022},
        {titulo:"Arquitetura de Software",autor:"Zezinho Pato", ano: 2023},
        {titulo:"Desenvolvendo para WEB",autor:"Huguinho Pato", ano: 2024},
        {titulo:"Microservicos",autor:"Zezinho Pato", ano: 2025}
      ];
      expect(bookList).toEqual(expectedBookList);
      expect(acervo.getBooksList()).toBe(bookList);
    });
  });

  describe('getTitlesList', () => {
    it('should return "Titles list"', () => {
      const acervo = new Acervo();
      const titlesList = [
        "Introducao ao JavaScrip",
        "NodeJS for Dummys",
        "Backends com NodeJS",
        "Arquitetura de Software",
        "Desenvolvendo para WEB",
        "Microservicos"
      ];
      const expectedTitlesList = acervo.getTitlesList(titlesList);
      expect(expectedTitlesList).toEqual(titlesList);
    });
  });
});
