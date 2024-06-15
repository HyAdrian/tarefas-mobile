import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import TaskListScreen from './src/screens/TaskListScreen';
import AddTaskScreen from './src/screens/addTaskScreen';
import { TaskProvider } from './src/context/TaskContext';
import { StatusBar } from 'react-native';


const Stack = createStackNavigator();
//Não sei pq mas n consigo comentar ali do lado mas o statusbar barstyle é aqueles icones tipo bateria, horario e tal
function App() { 
  return (
    <TaskProvider>
      <NavigationContainer> 
        <StatusBar barStyle="light-content"/>    
        <Stack.Navigator 
          screenOptions={{
            headerStyle: {
              backgroundColor: '#312F2F', // Cor de fundo daquela barrinha superior
            },
            headerTintColor: '#fff', // Cor do texto da barrinha superior
            headerTitleStyle: {      // Estilo do texto da barrinha superior
              fontWeight: 'bold',
            },
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="TaskList" component={TaskListScreen} />
          <Stack.Screen name="AddTask" component={AddTaskScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </TaskProvider>
  );
}

export default App;
