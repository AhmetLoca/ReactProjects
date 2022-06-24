import React from 'react';
import MovieList from './MovieList';

// movies bilgisini bir state içerisinde tanımlamamız gerek. State kullandıgımız için fonksiyonel component'imi class base bi component'ta cevirecegim.

class App extends React.Component {

  state = {
    movies: [
      {
        "id": 1,
        "name": "The Flash",
        "rating": 8.3,
        "overview": "This is a wider card with supporting text below as natural lead-in to additional content.",
        "imageURL": "https://image.tmdb.org/t/p/w220_and_h330_face/wHa6KOJAoNTFLFtp7wguUJKSnju.jpg"
      },

      {
        "id": 2,
        "name": "Interstellar",
        "rating": 6.3,
        "overview": "This is a wider card with supporting text below as natural lead-in to additional content.",
        "imageURL": "https://image.tmdb.org/t/p/w220_and_h330_face/gKG5QGz5Ngf8fgWpBsWtlg5L2SF.jpg"
      },

      {
        "id": 3,
        "name": "Arrow",
        "rating": 7.9,
        "overview": "This is a wider card with supporting text below as natural lead-in to additional content.",
        "imageURL": "https://image.tmdb.org/t/p/w220_and_h330_face/gKG5QGz5Ngf8fgWpBsWtlg5L2SF.jpg"
      }
    ]
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
          </div>
        </div>
        <MovieList
          movies={this.state.movies}


        />
      </div>
    )
  }
}
export default App;
