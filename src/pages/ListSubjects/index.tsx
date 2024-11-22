import { Header } from '../../components/Header';
import { Container } from './styles';
import { useCallback, useEffect, useState } from 'react';
import { getAll, SubjectDto } from '../../storage/subject/subject-storage';
import { useFocusEffect } from '@react-navigation/native';
import { ListCard } from '../../components/ListCard';
import { FlatList } from 'react-native';

export function ListSubjects() {
  const [subjects, setSubjects] = useState<SubjectDto[]>([]);

  async function loadSubjects() {
    const storedSubjects = await getAll();
    setSubjects(storedSubjects);
  }

  useFocusEffect(() => {
    loadSubjects();
  });

  return (
    <Container>
      <Header title='Listagem de Disciplinas' />
      <FlatList
        data={subjects}
        renderItem={({ item }) => <ListCard subject={item} />}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}
