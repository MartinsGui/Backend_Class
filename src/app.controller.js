import { Dependencies, Controller, Get, Query, Bind, Param, Post, Body } from '@nestjs/common';
import { Acervo } from './app.service';

@Controller('library')
@Dependencies(Acervo)
export class AppController {
  #acervo;
  constructor(acervo) {
    this.#acervo = acervo;
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
}