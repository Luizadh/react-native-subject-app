import { useState } from 'react'
import { ScrollView } from 'react-native'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Container } from './styles'
import { InputAmount } from '../../components/InputAmount'
import { InputDate } from '../../components/InputDate'
import { spendingCreate }
  from '../../storage/spending/spendingCreate'

import { spendingGetAll }
  from '../../storage/spending/spendingGetAll'

export function Dashboard() {

  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const [datePurchase, setDatePurchase] = useState('')
  const [category, setCategory] = useState('')
  const [local, setLocal] = useState('')

  async function handleAddNewSpending() {
    const data = {
      name,
      amount,
      datePurchase,
      category,
      local
    }

    await spendingCreate(data)
    const result = await spendingGetAll()
    console.log(result)

    setName('')
    setAmount('')
    setDatePurchase('')
    setCategory('')
    setLocal('')
  }

  return (
    <Container
    >
      <Header title='Controle de Gastos' />

      <ScrollView>
        <Input
          placeholder='Descrição'
          placeholderTextColor='#363F5F'
          value={name}
          onChangeText={value => setName(value)}
        />

        <InputAmount
          placeholder='Valor'
          placeholderTextColor='#363F5F'
          value={amount}
          onChangeText={value => setAmount(value)}
        />

        <InputDate
          placeholder='Data Compra'
          placeholderTextColor='#363F5F'
          value={datePurchase}
          onChangeText={value => setDatePurchase(value)}
        />

        <Input
          placeholder='Categoria'
          placeholderTextColor='#363F5F'
          value={category}
          onChangeText={value => setCategory(value)}
        />

        <Input
          placeholder='Local da Compra'
          placeholderTextColor='#363F5F'
          value={local}
          onChangeText={value => setLocal(value)}
        />
      </ScrollView>

      <Button
        title='Adicionar'
        onPress={handleAddNewSpending}
      />

    </Container>
  )
}