class Api {
    constructor({baseUrl, headers}) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    changeLikeMovie(
        country,
        director,
        duration,
        year,
        description,
        image,
        trailerLink,
        nameRU,
        nameEN,
        thumbnail,
        movieId,
        isLike,
        saveCard
        ) {
        
        if (isLike) {
            return fetch(`${this._baseUrl}movies/${saveCard._id}`, {
                method: 'DELETE',
                headers: this.headers,
                credentials: 'include',
            })
            .then(this._checkResponse)
        } else {
            return fetch(`${this._baseUrl}movies`, {
                method: 'POST',
                headers: this._headers,
                credentials: 'include',
                body: JSON.stringify({
                    country: country,
                    director: director,
                    duration: duration,
                    year: year,
                    description: description,
                    image: image,
                    trailerLink: trailerLink,
                    nameRU: nameRU,
                    nameEN: nameEN,
                    thumbnail: thumbnail,
                    movieId: movieId,
                })
            })
            .then(this._checkResponse)
        }
    }

    editUser(name, email) {
        return fetch(`${this._baseUrl}users/me`, {
            method: 'PATCH',
            headers: this._headers,
            credentials: 'include',
            body: JSON.stringify({
                name: name,
                email: email
            })
        })
        .then(this._checkResponse)
    }

    getAllSavedMovies() {
        return fetch(`${this._baseUrl}movies`, {
            headers: this._headers,
            credentials: 'include'
        })
        .then(this._checkResponse)
    }

    logOut() {
        return fetch(`${this._baseUrl}signout`, {
            headers: this._headers,
            credentials: 'include'
        })
        .then(this._checkResponse)
    }

}

export const ApiConfig = new Api({
    baseUrl: 'https://api.diplom.mbhselya.nomoredomains.work/',
    headers: {
        'Content-Type': 'application/json'
    }
});