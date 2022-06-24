import React from 'react';

const MovieList = (props) => {

  return (
    <div className="row" >

      {
        props.movies.map((movie) => (
          <div className="col-lg-4" key={movie.id}>
            <div className="card mb-4 shadow-sm">
              <img className="card-img-top" alt="Sample Movie" src={movie.imageURL} />
              <div className="card-body">
                <h5 className="card-title">{movie.name}</h5>
                <p className="card-text">{movie.overview}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <button onClick={(event) => props.deleteMovieProp(movie)} className="btn btn-md btn-outline-danger" type="button">Delete</button>
                  <button className="btn btn-md btn-outline-primary">{movie.rating}</button>
                </div>
              </div>
            </div>
          </div>
        ))
      }

    </div >
  )
}

export default MovieList;