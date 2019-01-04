import React from 'react'
import { Link } from 'react-router-dom'

class MovieCard extends React.Component {
  render() {
    const {
      vote_average,
      original_title,
      overview,
      poster_path,
      id
    } = this.props.movie

    return (
      <div id="MovieCard" className="col-lg-4 col-sm-2">
        <div className="card">
          <div className="card-header">
            <img
              className="card-img"
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              alt={original_title}
            />
          </div>
          <div className="card-body">
            <Link to={`/movies/${id}`}>
              <h1 className="card-title">{original_title}</h1>
            </Link>

            <div className="container">
              <div className="row">
                <div className="col-4 metadata">
                  <p>{vote_average}/10</p>
                </div>
              </div>
            </div>
            <p className="card-text">{overview}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default MovieCard
