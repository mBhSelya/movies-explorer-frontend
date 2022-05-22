export const BASE_URL = 'https://api.diplom.mbhselya.nomoredomains.work';

const checkResponse = (res) => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(res);
}

export const register = ( email, password, name) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({email, password, name})
    })
    .then(checkResponse);
}

export const authorize = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        "Content-Type": "application/json" 
      },
      body: JSON.stringify({password, email})
    })
    .then(checkResponse);
};

export const getContent = () => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            "Content-Type": "application/json"
        },
        
    })
    .then(checkResponse);
}