import axios from "axios";

const API_KEY = "AIzaSyBmO6GDk3GV3gghh2vqK665OIiP63XsPjY";

async function authanticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
  const response = await axios.post(url, {
    email,
    password,
    returnSecureToken: true,
  });

  const token = response.data.idToken;

  return token;
}

export function createUser(email, password) {
  return authanticate("signUp", email, password);
}
export function login(email, password) {
  return authanticate("signInWithPassword", email, password);
}
