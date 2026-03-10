import { Injectable, Dependencies } from '@nestjs/common';

@Injectable()
export class Acervo {
  #acervo;

  constructor() {
    this.#acervo= [];
    this.#acervo[0] = {titulo:"Introducao ao JavaScrip",autor:"Huguinho Pato", ano: 2020};
    this.#acervo[1] = {titulo:"NodeJS for Dummys",autor:"Zezinho Pato", ano: 2021};
    this.#acervo[2] = {titulo:"Backends com NodeJS",autor:"Luizinho Pato", ano: 2022};
    this.#acervo[3] = {titulo:"Arquitetura de Software",autor:"Zezinho Pato", ano: 2023};
    this.#acervo[4] = {titulo:"Desenvolvendo para WEB",autor:"Huguinho Pato", ano: 2024};
    this.#acervo[5] = {titulo:"Microservicos",autor:"Zezinho Pato", ano: 2025};
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

@Injectable()
@Dependencies(Acervo)
export class Metrics {
  #acervo;

  constructor(acervo) {
    this.#acervo = acervo;
  }

  getCountBooksPerAuthor(autor) {
    let count = 0;
    let books = this.#acervo.getBooksList();
    for(const book of books){
      if(book.autor === autor){
        count++;
      }
    }
    return count;
  }

  getCountBooksPerYear(ano) {
    let yearCount = 0;
    let books = this.#acervo.getBooksList();
    for(const book of books){
      if(book.ano >= ano){
        yearCount++;
      }
    }
    return yearCount;
  }

  getCountBooksPerAuthorAndYear(autor, ano) {
    let books = this.#acervo.getBooksList();
    let booksList = [];
    for(const book of books){
      if(book.autor === autor && book.ano === ano){
        booksList.push(book);
      }
    }
    return booksList;
  }
}