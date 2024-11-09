import { Header } from '../../components/Header'
import { Container, Transactions } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SearchExpenses() {

  return (
    <Container>
      <Header title='Pesquisa Gastos' />

      <Input
        placeholder='Categoria'
        placeholderTextColor='#363F5F'
      />

      <Button
        title='Pesquisa'
      />

      <Transactions>
      </Transactions>

    </Container>
  )
}

