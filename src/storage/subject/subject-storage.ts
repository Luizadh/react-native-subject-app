import AsyncStorage from '@react-native-async-storage/async-storage';

import { SUBJECT_COLLECTION } from '../storageConfig';

export type SubjectDto = {
  code: string;
  subject: string;
  hours: string;
};

export async function create(subject: SubjectDto) {
  try {
    const subjects = await getAll();

    const storage = [...subjects, subject];

    const data = await AsyncStorage.setItem(
      SUBJECT_COLLECTION,
      JSON.stringify(storage)
    );

    return data;
  } catch (error) {
    throw error;
  }
}

export async function getAll() {
  try {
    const storage = await AsyncStorage.getItem(SUBJECT_COLLECTION);
    const subject: SubjectDto[] = storage ? JSON.parse(storage) : [];
    return subject;
  } catch (error) {
    throw error;
  }
}
