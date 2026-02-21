import { Controller, Get } from '@nestjs/common';
//import { AppService } from './app.service';

@Controller('library')
//@Dependencies(AppService)
export class AppController {
  //constructor(appService) {
  //this.appService = appService;
  //}

  #acervo;

  constructor() {
    this.#acervo= [];

    this.#acervo[0] = {titulo:"Introducao ao JavaScrip",autor:"Huguinho Pato"};
    this.#acervo[1] = {titulo:"NodeJS for Dummys",autor:"Zezinho Pato"};
    this.#acervo[2] = {titulo:"Backends com NodeJS",autor:"Luizinho Pato"};
    this.#acervo[3] = {titulo:"Arquitetura de Software",autor:"Zezinho Pato"};
    this.#acervo[4] = {titulo:"Desenvolvendo para WEB",autor:"Huguinho Pato"};
    this.#acervo[5] = {titulo:"Microservicos",autor:"Zezinho Pato"};
  }

  @Get()
  getHello() {
    return "Welcome to central library!";
  }

  @Get('books')
  getBooksList() {
    return this.#acervo;
  }

  @Get('titles')
  getTitlesList() {
    const titles = [];
    for (let i = 0; i < this.#acervo.length; i++) {
      titles.push(this.#acervo[i].titulo);
    }
    return titles;
  }

  @Get('authors')
  getAuthorsList() {
    //const author = [];
    //for (let i = 0; i < this.#acervo.length; i++) {
      //if(author.filter(name => name === this.#acervo[i].autor).length === 0){
        //author.push(this.#acervo[i].autor);
      //}
    //}
    //return author;
    const authors = new Set();
    for(const book of this.#acervo.values()){
      authors.add(book.autor);
    }
    return Array.from(authors);
  }

}
