import React from 'react';
import Book from './Book';

class BookList extends React.Component {


  render() {

    const bookList = this.props.books.map((book, i) => {
      return <Book book={book} key={i} />
    })

    return <div>{bookList}</div>
  }
}

export default BookList;