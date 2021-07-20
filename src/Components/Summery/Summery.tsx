import { useTrasactions } from "../../hooks/useTrasactions";
import { Contenteiner } from "./SummeryStyle";

import entradaImg from '../../assests/entradas.svg'
import saidaImg from '../../assests/saidas.svg'
import totalImg from '../../assests/total.svg'

export function Summery() {
  const { trasactions } = useTrasactions()

  let summeryValue = trasactions.reduce((acc, trasaction) => {
    if (trasaction.type === 'entrada') {
      (acc.entrada += Number(trasaction.value));
      (acc.total += Number(trasaction.value));
      return acc
    } else {
      (acc.saida += Number(trasaction.value));
      (acc.total -= Number(trasaction.value));
      return acc
    }
  }, {
    entrada: 0,
    saida: 0,
    total: 0
  });
  return (
    <Contenteiner>
      <div>
        <header>
          Entradas
          <img src={entradaImg} alt="entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency:'BRL'
          }).format(summeryValue.entrada)}
        </strong>
      </div>
      <div>
        <header>
          Saidas
          <img src={saidaImg} alt="saidas" />
        </header>
        <strong>-
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency:'BRL'
          }).format(summeryValue.saida)}
        </strong>
      </div>
      <div className='total'>
        <header>
          Total
          <img src={totalImg} alt="total" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR',{
            style: 'currency',
            currency:'BRL'
          }).format(summeryValue.total)}
        </strong>
      </div>
    </Contenteiner>
  )
}