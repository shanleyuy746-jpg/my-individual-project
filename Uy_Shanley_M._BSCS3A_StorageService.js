import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = '@notes_app_data';

export async function loadNotes() {
  try {
    const raw = await AsyncStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error(e);
    return [];
  }
}

export async function saveNotes(list) {
  try {
    await AsyncStorage.setItem(KEY, JSON.stringify(list));
  } catch (e) {
    console.error(e);
  }
}