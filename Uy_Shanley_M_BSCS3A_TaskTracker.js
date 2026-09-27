import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Keyboard,
  StyleSheet,
  Platform,
} from 'react-native';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleAddTask = () => {
    if (inputText.trim() === '') return;

    const newTask = {
      id: Date.now().toString(),
      text: inputText,
      isCompleted: false,
    };

    setTasks([...tasks, newTask]);
    setInputText('');
    Keyboard.dismiss();
  };

  const handleToggleComplete = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, isCompleted: !task.isCompleted } : task));
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const renderTaskItem = ({ item }) => (
    <View style={styles.taskRow}>
      <TouchableOpacity
        style={styles.taskTextContainer}
        onPress={() => handleToggleComplete(item.id)}
        activeOpacity={0.7}
      >
        <View style={[styles.checkbox, item.isCompleted && styles.checkboxChecked]}>
          {item.isCompleted && <Text style={styles.checkmark}>✓</Text>}
        </View>
        <Text style={[styles.taskText, item.isCompleted && styles.taskTextCompleted]}>
          {item.text}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.deleteButton} onPress={() => handleDeleteTask(item.id)}>
        <Text style={styles.deleteButtonText}>✕</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Task Tracker</Text>
        <Text style={styles.headerSubtitle}>Tap to check off, ✕ to delete</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task..."
          placeholderTextColor="#888"
          value={inputText}
          onChangeText={setInputText}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>

      {tasks.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Your list is empty. Add a task to start!</Text>
        </View>
      ) : (
        <FlatList
          data={tasks}
          renderItem={renderTaskItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
        />
      )}
    </SafeAreaView>
  );
}

// Styles are now embedded directly below the code so no import is needed!
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9FC',
    paddingTop: Platform.OS === 'android' ? 40 : 0,
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1A202C',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#718096',
    marginTop: 4,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  input: {
    flex: 1,
    height: 50,
    backgroundColor: '#EDF2F7',
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#2D3748',
    marginRight: 12,
  },
  addButton: {
    backgroundColor: '#4C51BF',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  addButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  listContainer: {
    padding: 20,
  },
  taskRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    justifyContent: 'space-between',
  },
  taskTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginRight: 10,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#A0AEC0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  checkboxChecked: {
    backgroundColor: '#48BB78',
    borderColor: '#48BB78',
  },
  checkmark: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  taskText: {
    fontSize: 16,
    color: '#2D3748',
    flex: 1,
  },
  taskTextCompleted: {
    textDecorationLine: 'line-through',
    color: '#A0AEC0',
  },
  deleteButton: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    backgroundColor: '#FED7D7',
  },
  deleteButtonText: {
    color: '#E53E3E',
    fontSize: 14,
    fontWeight: 'bold',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  emptyText: {
    fontSize: 16,
    color: '#A0AEC0',
    textAlign: 'center',
  },
});