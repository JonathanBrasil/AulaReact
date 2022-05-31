import axios from "axios";

// "usuario": "teste@email.com.br",
// "senha": "stringst",

export const api = axios.create({
    // baseURL:'https://bloggeneration.herokuapp.com'
    baseURL: 'https://blogueirinhapessoal.herokuapp.com'
})

export const login = async (url:any, dados:any, setDado:any) => {
    const resposta = await api.post(url, dados)
    setDado(resposta.data.token)
}

export const cadastro = async (url:any, dados:any, setDado:any) => {
    const resposta = await api.post(url, dados)
    setDado(resposta.data)
}