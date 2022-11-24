export class Api{
    constructor(url){
        this._URL = url;
        this._headers = {
            'Content-Type': 'application/json',
        }
    }

    _checkResponse(res){
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка ${res.status}`);
        }

    getUserData(){
        return fetch(`${this._URL}/users/me`,{
            headers: this._headers,
            method: 'GET',
            credentials:"include",
        })
        .then(this._checkResponse) 
    }

    updateUser(user){
        const body = {
            name: user.name,
            email: user.email
        };
        return fetch(`${this._URL}/users/me`,{
            headers: this._headers,
            method: 'PATCH',
            body: JSON.stringify(body),
            credentials:"include",
        })
        .then(this._checkResponse) 
    }

    likedAndSavedMovie(card) {
        const body = {
            country: card.country,
            director: card.director,
            duration: card.duration,
            year: card.year,
            description: card.description,
            image: `https://api.nomoreparties.co/${card.image.url}`,
            trailerLink: card.trailerLink,
            nameRU: card.nameRU,
            nameEN: card.nameEN,
            thumbnail: `https://api.nomoreparties.co/${card.image.formats.thumbnail.url}`,
            movieId: card.id,
        };
        return fetch(`${this._URL}/movies`, {
            headers: this._headers,
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(body),
        })
        .then(this._checkResponse);
      }

      getSavedMovies() {
        return fetch(`${this._URL}/movies`, {
          method: 'GET',
          credentials: 'include',
          headers: this._headers,
        })
        .then(this._checkResponse);
      }

      deleteSavedMovie(cardId) {
        return fetch(`${this._URL}/movies/`+ cardId, {
          method: 'DELETE',
          credentials: 'include',
          headers: this._headers,
        })
        .then(this._checkResponse);
      }


}

export const MainApi = new Api('https://api.anastasiavlzh-diploma.nomoredomains.icu');