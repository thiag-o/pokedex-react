import axios from "axios";

const API = import.meta.env.VITE_API_TESTE
console.log(API)

const urlSincro = axios.create({
  baseURL: API,
  headers: {
    'Content-Type': 'application/json'
  }
})

function setToken(token: string) {
  const config = {
    headers: {
      'Authorization': 'Bearer ' + token
    }
  }
  return config
}


export async function REGISTER_POST(body: {
  username: string,
  password: string,
  email: string,
  name: string
}) {

  const response = await urlSincro.post('/register', body,)
  return response
}


export async function LOGIN_POST(body: {
  username: string,
  password: string,
}) {
  const response = await urlSincro.post('/login', body)
  return response
}

export async function GET_USER(token: string) {

  const config = setToken(token)
  const response = await urlSincro.get('/user', config)
  return response

}

export async function GET_USER_POKEMONS(token: string) {

  const config = setToken(token)
  const response = await urlSincro.get('/user/favPokemon', config)
  return response

}

export async function GET_ALL_POKEMONS() {

  const response = (await urlSincro.get('/pokemons')).data.data
  return response

}

export async function POST_USER_ADD_POKEMONS(token: string, id: string) {
  const config = setToken(token)
  const response = await urlSincro.post(`/user/favPokemon/${id}`, '', config)
  return response
}


export async function DELETE_USER_POKEMONS(token: string, id: string) {

  const config = setToken(token)
  const response = await urlSincro.delete(`/user/favPokemon/${id}`, config)
  return response

}