import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function NoteItem({ note, onEdit, onDelete }) {
  return (
    <View style={styles.row}>
      <Text style={styles.noteText}>{note.text}</Text>
      <View style={styles.actions}>
        <TouchableOpacity onPress={() => onEdit(note)}>
          <Text style={styles.edit}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onDelete(note.id)}>
          <Text style={styles.del}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}