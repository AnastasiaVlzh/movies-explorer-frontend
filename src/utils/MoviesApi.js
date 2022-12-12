class MoviesApi {
    constructor(url) {
      this._url = url;
      this._headers = {
        'Content-type': 'application/JSON',
      };
    }
  
    _checkResponse(res){
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
    }
  
    getMovies() {
      return fetch(`${this._url}/beatfilm-movies`, {
        method: 'GET',
        headers: this._headers,
      }).then(this._checkResponse);
    }
  }

  export const moviesApi = new MoviesApi('https://api.nomoreparties.co');