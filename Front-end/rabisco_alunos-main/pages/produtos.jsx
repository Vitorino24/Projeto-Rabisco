// Importamos os componentes Headerb, Titulo e CardList.
import Headerb from '../components/Headerb';
import Titulo from '../components/Titulo';
import CardList from '@/components/CardList';

// Importamos os hooks useState e useEffect do React.
import { useState, useEffect } from 'react';

// Importamos a função getProdutos do serviço apiRabisco.
import { getProdutos } from '@/services/apiRabisco';

// Definimos o componente funcional 'produtos' como o export padrão.
export default function produtos() {
  // Declaramos o estado 'produtos' e a função 'setProdutos' para atualizá-lo.
  const [produtos, setProdutos] = useState([]);

  // Função assíncrona para buscar produtos do servidor.
  async function buscaProdutos() {
    try {
      // Chamamos a função getProdutos e aguardamos a resposta.
      const data = await getProdutos();
      // Exibimos os dados no console para depuração.
      console.log(data);
      // Atualizamos o estado 'produtos' com os dados recebidos.
      setProdutos(data);
    } catch (error) {
      // Em caso de erro, exibimos uma mensagem no console.
      console.error('Erro ao buscar produtos:', error);
    }
  }

  // Utilizamos o hook useEffect para executar código após a renderização do componente.
  useEffect(() => {
    // Chamamos a função para buscar produtos ao montar o componente.
    buscaProdutos();
    // Configuramos um intervalo para atualizar a lista de produtos a cada 500 ms.
    const atualiza = setInterval(buscaProdutos, 500);
    // Retornamos uma função de limpeza para limpar o intervalo quando o componente for desmontado.
    return function () {
      clearInterval(atualiza);
    }
  }, []); // O array vazio como segundo argumento garante que isso execute apenas uma vez, na montagem.

  // Renderizamos os componentes Headerb, Titulo e CardList, passando 'produtos' como propriedade para CardList.
  return (
    <>
      <Headerb />
      <Titulo texto="Conheça nossos produtos!" />
      <CardList produtos={produtos} />
    </>
  );
}