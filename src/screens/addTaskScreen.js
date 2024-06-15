import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Pressable } from 'react-native';
import { TaskContext } from '../context/TaskContext';

function AddTaskScreen({ navigation }) {
  const [task, setTask] = useState('');
  const [list, setList] = useState('');
  const { addTask } = useContext(TaskContext);

  const AddTask = () => {
    if (task.trim() && list.trim() !== '' && (list === '1' || list === '2')) {
      const randomColor = generateRandomColor();
      addTask({ title: task, color: randomColor, list: parseInt(list)});
      navigation.navigate('TaskList');
    } else {
      alert('Por favor, preencha todos os campos corretamente.');
    }
  };

  const generateRandomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
  };

  return (
    <View style={styles.root}>
        <Text style={styles.label}>Adicionar Nova Tarefa</Text>
        <TextInput
        style={styles.input}
        placeholder="Título da Tarefa"
        placeholderTextColor="white"
        value={task}
        onChangeText={setTask}
        />
        <TextInput
        style={styles.input}
        placeholderTextColor="white"
        placeholder="Insira o número da lista (1 ou 2)"
        keyboardType="numeric"
        value={list}
        onChangeText={setList}
        />
        <Pressable style={styles.button} onPress={AddTask}>
        <Text style={styles.buttonText}>AddTask</Text>
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#151515',
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    color: 'white'
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    color: 'white',
  },
  button: {
    backgroundColor: '#6200ee',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AddTaskScreen;
