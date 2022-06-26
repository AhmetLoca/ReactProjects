import React from 'react';
import Book from './Book';
import './BookList.css';
import BookContext from '../contexts/BookContexts';

class BookList extends React.Component {

  static contextType = BookContext;

  render() {

    const books = this.context

    return (
      <section className="page-section bg-light" id="portfolio">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">BookFolio</h2>
            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
          <div className="row">

            {books.map((book, i) => {
              return <Book book={book} key={i} />
            })
            }

          </div>
        </div>
      </section>
    )
  }
}

export default BookList;

/*
Default Value ---> this.context

1.adım - context nesnesini oluşturduk.
2.adım - bu context nesnesimize başlangıç değeri verdik ve export ettik(books yani default value)
3.adım - Sonra kullanmak istediğimiz componentta ( BookList.js)'de import ettik.
4.adım - static contextType = BookContext; olarak atadık.
5.adım - this.context ile ilgili veriye ulaştık

 */