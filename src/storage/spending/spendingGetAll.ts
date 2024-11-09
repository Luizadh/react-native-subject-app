import { SpendingStorageDTO } from './SpendingStorageDTO';
import AsyncStorage from "@react-native-async-storage/async-storage"

import { SPENDING_COLLECTION } from "../storageConfig"

export async function spendingGetAll() {
  try {
    const storage = await AsyncStorage.getItem(SPENDING_COLLECTION)
    const spending: SpendingStorageDTO =
      storage ? JSON.parse(storage) : []
    return spending
  } catch (error) {
    throw error
  }
}