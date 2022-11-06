
export const BASE_URL = 'https://api.anastasiavlzh-diploma.nomoredomains.icu'

const checkResponse = (response) => {
  return response.ok ? response.json() : Promise.reject(`Ошибка ${response.status}: ${response.statusText}`);
};

const headers = {
  'Content-Type': 'application/json',
};

export const register = ({ name, email, password }) => {
  return fetch(`${BASE_URL}/signup`, {
    headers,
    credentials:"include",
    //mode: 'no-cors',
    method: 'POST',
    body: JSON.stringify({name, email, password }),
  })
    .then(res => checkResponse(res));
};

export const authorize = ({ email, password }) => {
  return fetch(`${BASE_URL}/signin`, {
    headers,
    credentials:"include",
    method: 'POST',
    body: JSON.stringify({ email, password }),
  })
    .then(res => checkResponse(res));
};

export const logout = () => {
  return fetch(`${BASE_URL}/logout`, {
    method: 'GET',
    headers,
    credentials: "include",
  })
  .then((res) => {
    return checkResponse(res)
 });
};
  