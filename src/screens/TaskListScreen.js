import React, { useContext, useState,useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Button, Dimensions, Pressable } from 'react-native';
import { TaskContext } from '../context/TaskContext';
const { width } = Dimensions.get('window');

function TaskListScreen({ navigation }) {
  const { tasks } = useContext(TaskContext);
  const [selectedList, setSelectedList] = useState(1); 

  return (
    <View style={styles.root}>
      <View style={styles.buttonContainer}>
        <Button
          title="Lista 1"
          onPress={() => setSelectedList(1)}
          color={selectedList === 1 ? '#6200ee' : '#000'} 
        />
        <Button
          title="Lista 2"
          onPress={() => setSelectedList(2)}
          color={selectedList === 2 ? '#6200ee' : '#000'} 
        />
      </View>
      
      <FlatList
        data={tasks.filter(task => task.list === selectedList)} // filtragem
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={[styles.task, { backgroundColor: item.color }]}>
            <Text>{item.title}</Text>
          </View>
        )}
      />
      
      <Pressable style={styles.button} onPress={() => navigation.navigate("AddTask")}>
        <Text style={styles.buttonText}>AddTask</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#151515',
    paddingTop: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  task: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.9,
    height: 80,
    borderRadius: 10,
    elevation: 5,
    marginVertical: 10,
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

export default TaskListScreen;
