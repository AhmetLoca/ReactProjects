import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

// movies bilgisini bir state içerisinde tanımlamamız gerek. State kullandıgımız için fonksiyonel component'imi class base bi component'ta cevirecegim.

class App extends React.Component {

  state = {
    movies: [
      {
        "id": 1,
        "name": "The Flash",
        "rating": 8.3,
        "overview": "1",
        "imageURL": "https://image.tmdb.org/t/p/w220_and_h330_face/wHa6KOJAoNTFLFtp7wguUJKSnju.jpg"
      },

      {
        "id": 2,
        "name": "Interstellar",
        "rating": 6.3,
        "overview": "2",
        "imageURL": "https://image.tmdb.org/t/p/w220_and_h330_face/gKG5QGz5Ngf8fgWpBsWtlg5L2SF.jpg"
      },

      {
        "id": 3,
        "name": "Arrow",
        "rating": 7.9,
        "overview": "3",
        "imageURL": "https://image.tmdb.org/t/p/w220_and_h330_face/gKG5QGz5Ngf8fgWpBsWtlg5L2SF.jpg"
      },

      {
        "id": 4,
        "name": "Rogue",
        "rating": 7.4,
        "overview": "4",
        "imageURL": "https://image.tmdb.org/t/p/w220_and_h330_face/6Bbq8qQWpoApLZYWFFAuZ1r2gFw.jpg"
      },

      {
        "id": 5,
        "name": "Project Power",
        "rating": 6.9,
        "overview": "5",
        "imageURL": "https://image.tmdb.org/t/p/w220_and_h330_face/6Bbq8qQWpoApLZYWFFAuZ1r2gFw.jpg"
      },

      {
        "id": 6,
        "name": "Superman",
        "rating": 7.6,
        "overview": "6",
        "imageURL": "https://image.tmdb.org/t/p/w220_and_h330_face/6Bbq8qQWpoApLZYWFFAuZ1r2gFw.jpg"
      }
    ],
    searchQuery: ""
  }

  deleteMovie = (movie) => {
    const newMovieList = this.state.movies.filter(
      m => m.id !== movie.id
    );
    this.setState({
      movies: newMovieList
    })
  }

  searchMovie = (event) => {
    this.setState({ searchQuery: event.target.value })
  }

  render() {

    let filteredMovies = this.state.movies.filter(
      (movie) => {
        return movie.name.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1
      }
    )

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SearchBar searchMovieProp={this.searchMovie} />
          </div>
        </div>
        <MovieList
          movies={filteredMovies}
          deleteMovieProp={this.deleteMovie}
        />
      </div>
    )
  }
}
export default App;
