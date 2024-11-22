import { Container, ButtonCard, TextCard } from './styles';
import { SubjectDto } from '../../storage/subject/subject-storage';

type Props = {
  subject: SubjectDto;
};

export function ListCard({ subject }: Props) {
  return (
    <Container>
      <ButtonCard>
        <TextCard>Disciplina</TextCard>
        <TextCard>Código: {subject.code}</TextCard>
        <TextCard>Disciplina: {subject.subject}</TextCard>
        <TextCard>Carha Horária: {subject.hours}</TextCard>
      </ButtonCard>
    </Container>
  );
}
