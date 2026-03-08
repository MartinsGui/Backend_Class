import { Injectable } from '@nestjs/common';

@Injectable()
export class Acervo {
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

  getBooksList() {
    return this.#acervo;
  }

  getTitlesList() {
    const titles = [];
    for (let i = 0; i < this.#acervo.length; i++) {
      titles.push(this.#acervo[i].titulo);
    }
    return titles;
  }

  getAuthorsList() {
    const authors = new Set();
    for(const book of this.#acervo.values()){
      authors.add(book.autor);
    }
    return Array.from(authors);
  }
  
  getBookAuthor(title) {
    let bookAuthor = [];
    for(const book of this.#acervo.values()){
      if(book.titulo === title){
        bookAuthor.push(book.autor);
      }  
    }   
    return bookAuthor;
  }

  getBookTitle(autor) {
    let bookTitle = [];
    for(const book of this.#acervo.values()){
      if(book.autor === autor){
        bookTitle.push(book.titulo);  
      }
    }
    return bookTitle;
  }
  
  postAddBook(book) {
    this.#acervo.push(book);
  }
}
