import React from 'react';


class Book extends React.Component {

  render() {
    console.log(this.props.book)

    return <div>
      <h2>{this.props.book.title}</h2>
      <h3>{this.props.book.author}</h3>

    </div>
  }


}

export default Book;