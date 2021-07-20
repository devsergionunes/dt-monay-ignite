import { useTrasactions } from "../../hooks/useTrasactions";
import { Contenteiner } from "./TrasactionTablestyle";

export function TrasactionTable() {
  const { trasactions } = useTrasactions()

  return (
    <Contenteiner>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {trasactions.map((trasaction) => {
            return (
              <tr key={trasaction.id}>
                <td>{trasaction.title}</td>
                <td className={trasaction.type}>
                  {trasaction.type === 'saida' && '- '}
                  {new Intl.NumberFormat('pt-BR', {
                    style:'currency',
                    currency: 'BRL'
                  }).format(+trasaction.value)}
                </td>
                <td>{ trasaction.category}</td>
                <td>
                  {new Intl.DateTimeFormat('pt-BR').format(
                    new Date(trasaction.cratedAt)
                  )}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </Contenteiner>
  )
}