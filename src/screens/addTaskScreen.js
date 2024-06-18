import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { TaskContext } from '../context/TaskContext';
import styles from '../styles/styles';

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
        placeholderTextColor="gray"
        value={task}
        onChangeText={setTask}
        />
        <TextInput
        style={styles.input}
        placeholderTextColor="gray"
        placeholder="Insira o número da lista (1 ou 2)"
        keyboardType="numeric"
        value={list}
        onChangeText={setList}
        />
        <Pressable style={styles.button} onPress={AddTask}>
        <Text style={styles.buttonText}>Adicionar Tarefa</Text>
        </Pressable>
    </View>
  );
}

export default AddTaskScreen;
