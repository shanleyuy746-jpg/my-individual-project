import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { loadNotes, saveNotes } from './StorageService';
import NoteItem from './NoteItem';
import styles from './styles';

export default function App() {
  const [notes, setNotes] = useState([]);
  const [text, setText] = useState('');
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    loadNotes().then(setNotes);
  }, []);

  const sync = (next) => {
    setNotes(next);
    saveNotes(next);
  };

  const save = () => {
    const clean = text.trim();
    if (!clean) return;
    if (editId) {
      sync(notes.map((n) => (n.id === editId ? { ...n, text: clean } : n)));
      setEditId(null);
    } else {
      sync([{ id: Date.now().toString(), text: clean }, ...notes]);
    }
    setText('');
  };

  const remove = (id) => {
    sync(notes.filter((n) => n.id !== id));
    if (editId === id) {
      setEditId(null);
      setText('');
    }
  };

  return (
    <View style={styles.wrap}>
      <Text style={styles.title}>Notes</Text>
      <View style={styles.rowInput}>
        <TextInput style={styles.input} placeholder="New note..." value={text} onChangeText={setText} />
        <TouchableOpacity style={styles.btn} onPress={save}>
          <Text style={styles.btnTxt}>{editId ? 'Update' : 'Add'}</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <NoteItem
            note={item}
            onEdit={(n) => {
              setText(n.text);
              setEditId(n.id);
            }}
            onDelete={remove}
          />
        )}
        ListEmptyComponent={<Text style={styles.empty}>No notes yet.</Text>}
      />
    </View>
  );
}