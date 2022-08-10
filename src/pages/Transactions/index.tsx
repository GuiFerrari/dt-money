import {
  Container,
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'

import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'

import { SearchForm } from './components/SearchForm'

export function Transactions() {
  return (
    <Container>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighlight variant="income">R$ 12.000,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td>Hamburguer</td>
              <td>
                <PriceHighlight variant="outcome">- R$ 39,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </Container>
  )
}