import React from 'react';
import Axios from 'axios';

class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      poster: '',
      comment: '',
    }
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  submitForm(e) {
    e.preventDefault();
    const url = 'https://post-a-form.herokuapp.com/api/movies/';
    Axios.post(url, this.state)
      .then(res => res.data)
      .then(res => {
        alert(`Movie added with ID ${res.id}`);
      })
      .catch(e => {
        console.error(e);
        alert(`Error during the adding of movie : ${e.message}`);
      });
  }

  render() {
    return(
      <div className="FormMovie">
        <h1>Movie form</h1>

        <form onSubmit={this.submitForm}>
          <fieldset>
            <legend>Informations</legend>
            <div className="form-data">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                onChange={this.onChange}
                value={this.state.title}
              />
            </div>

            <div className="form-data">
              <label htmlFor="poster">Poster</label>
              <input
                type="text"
                id="poster"
                name="poster"
                onChange={this.onChange}
                value={this.state.poster}
              />
            </div>

            <div className="form-data">
              <label htmlFor="comment">Comment</label>
              <textarea
                type="comment"
                id="comment"
                name="comment"
                onChange={this.onChange}
                value={this.state.email}
              />
            </div>
            <hr />
            <div className="form-data">
              <input type="submit" value="Send" />
            </div>
          </fieldset>
        </form>
      </div>
    )
  }
}

export default Movies;