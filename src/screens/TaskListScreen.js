import React, { useContext, useState, useEffect } from 'react';
import { View, Text, FlatList, Button} from 'react-native';
import { TaskContext } from '../context/TaskContext';
import PlusIcon from '../components/PlusIcon';
import styles from '../styles/styles';

function TaskListScreen({ navigation }) {
  const { tasks } = useContext(TaskContext);
  const [selectedList, setSelectedList] = useState(1); 

  return (
    <View style={styles.root}>
      <View style={styles.buttonContainer}>
        <Button
          title="Lista 1"
          onPress={() => setSelectedList(1)}
          color={selectedList === 1 ? '#df2b53' : '#000'} 
        />
        <Button
          title="Lista 2"
          onPress={() => setSelectedList(2)}
          color={selectedList === 2 ? '#df2b53' : '#000'} 
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
      <View style={styles.fab}>
          <PlusIcon onPress={() => navigation.navigate("AddTask")}/>
      </View>
    </View>
  );
}

export default TaskListScreen;
