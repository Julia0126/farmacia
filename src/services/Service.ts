/* Construa a Classe Service com os métodos listar, cadastrar, atualizar e deletar indicando o endereço do Deploy do Backend da Farmácia.
Construa os Componentes ListarCategorias (GET), CardCategoria,  FormCategoria (POST e PUT) e DeletarCategoria (DELETE), responsáveis por consumir o Recurso Categoria;*/

import axios from "axios";

const api = axios.create({
  baseURL:'https://farmacia-n0cw.onrender.com/'
})


export const listar = async(url: string, setDados: Function, header: Object) => {
  const resposta = await api.get(url, header)
  setDados(resposta.data)
}

export const cadastrar = async(url: string, dados: Object, setDados: Function, header: Object) => {
  const resposta = await api.post(url, dados, header)
  setDados(resposta.data)
}

export const atualizar = async(url: string, dados: Object, setDados: Function, header: Object) => {
  const resposta = await api.put(url, dados, header)
  setDados(resposta.data)
}

export const deletar = async(url: string, header: Object) => {
  await api.delete(url, header)
}