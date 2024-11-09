import { useState } from 'react';
import { ScrollView } from 'react-native';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Container } from './styles';
import { create, getAll } from '../../storage/subject/subject-storage';

export function Dashboard() {
  const [code, setCode] = useState('');
  const [subject, setSubject] = useState('');
  const [hours, setHours] = useState('');

  async function handleAddNewSubject() {
    const data = {
      code,
      subject,
      hours,
    };

    await create(data);
    const result = await getAll();
    console.log(result);

    setCode('');
    setSubject('');
    setHours('');
  }

  return (
    <Container>
      <Header title='Cadastro da Disciplina' />

      <ScrollView>
        <Input
          placeholder='Código'
          placeholderTextColor='#363F5F'
          value={code}
          onChangeText={(value) => setCode(value)}
        />

        <Input
          placeholder='Disciplina'
          placeholderTextColor='#363F5F'
          value={subject}
          onChangeText={(value) => setSubject(value)}
        />

        <Input
          placeholder='Carga horária'
          placeholderTextColor='#363F5F'
          value={hours}
          onChangeText={(value) => setHours(value)}
        />
      </ScrollView>

      <Button title='Adicionar' onPress={handleAddNewSubject} />
    </Container>
  );
}
