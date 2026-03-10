import { Dependencies, Controller, Get, Query, Bind, Param, Post, Body } from '@nestjs/common';
import { Acervo, Metrics } from './app.service';

@Controller('library')
@Dependencies(Acervo, Metrics)
export class AppController {
  #acervo;
  #metrics;
  
  constructor(acervo, metrics) {
    this.#acervo = acervo;
    this.#metrics = metrics;
  }

  @Get()
  getHello() {
    return "Welcome to central library!";
  }

  @Get('books')
  getBooksList() {
    return this.#acervo.getBooksList();
  }

  @Get('titles')
  getTitlesList() {
    return this.#acervo.getTitlesList();
  }

  @Get('authors')
  getAuthorsList() {
    return this.#acervo.getAuthorsList();
  }

  @Get('bookAuthor')
  @Bind(Query())
  getBookAuthor(query){
    return this.#acervo.getBookAuthor(query.title);
  }

  @Get('bookTitle/:titulo')
  @Bind(Param())
  getBookTitle(param){   
    return this.#acervo.getBookAuthor(param.titulo);
  }

  @Post('book')
  @Bind(Body())
  postAddBook(body){
    return this.#acervo.postAddBook(body);
  }

  @Get('booksPerAuthor')
  @Bind(Query())
  getBooksPerAuthor(query){
    return this.#metrics.getCountBooksPerAuthor(query.autor);
  }

  @Get('booksPerYear')
  @Bind(Query())
  getCountBooksPertear(query){
    return this.#metrics.getCountBooksPerYear(query.ano); 
  }

  @Get('booksPerAuthorAndYear')
  @Bind(Query())
  getCountBooksPerAuthorAndYear(query){
    return this.#metrics.getCountBooksPerAuthorAndYear(query.autor, Number(query.ano));
  }
}