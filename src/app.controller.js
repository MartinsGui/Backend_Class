import { Controller, Get, Query, Bind, Param, Post, Body } from '@nestjs/common';
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

  @Get('bookAuthor')
  @Bind(Query())
  getBookAuthor(query){
    console.log(query.autor);    
    let bookAuthor = [];
    for(const book of this.#acervo.values()){
      if(book.autor === query.autor){
        bookAuthor.push(book.titulo);
      }  
    }
    return bookAuthor;
  }

  @Get('bookTitle/:titulo')
  @Bind(Param())
  getBookTitle(param){   
    let bookTitle = [];
    for(const book of this.#acervo.values()){
      if(book.titulo === param.titulo){
        bookTitle.push(book.autor);
      }  
    }
    return bookTitle;
  }

  @Post('book')
  @Bind(Body())
  postAddBook(body){
    this.#acervo.push(body);
    return "Book added successfully!";
  }
}
