// Importamos a biblioteca Axios, que é usada para fazer requisições HTTP.
import axios from 'axios'

// Criamos uma instância do Axios com a configuração da baseURL, 
// que é o endereço principal do nosso servidor. Todas as requisições 
// feitas usando essa instância irão usar esse endereço como base.
const api = axios.create({ baseURL: 'http://127.0.0.1:5000' })

// Função assíncrona para buscar produtos do servidor.
export async function getProdutos() {
    try {
        // Fazemos uma requisição GET para o endpoint '/produto' usando a instância do Axios.
        const response = await api.get('/produto')
        console.log|(response.data)
        
        // Retornamos os dados recebidos na resposta da requisição.
        return response.data
    } catch (error) {
        // Em caso de erro na requisição, exibimos uma mensagem de erro no console.
        console.error(`Erro ao buscar produtos: ${error.message}`)
    }
}