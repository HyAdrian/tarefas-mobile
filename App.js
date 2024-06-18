import React from 'react';
import { Dimensions } from "react-native";
import { Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TaskListScreen from './src/screens/TaskListScreen';
import AddTaskScreen from './src/screens/addTaskScreen';
import { TaskProvider } from './src/context/TaskContext';
import { StatusBar } from 'react-native';

const { height } = Dimensions.get('window');
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

//Não sei pq mas n consigo comentar ali do lado mas o statusbar barstyle é aqueles icones tipo bateria, horario e tal
function App() { 
  return (
    <TaskProvider>
      <NavigationContainer> 
        <StatusBar barStyle="light-content"/>    
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarStyle: {
              height: height * 0.08,
              backgroundColor: '#312f2f', 
              padding: 2
            },
            
            tabBarActiveTintColor: '#df2b53', // Cor do texto e ícone ativo
            tabBarInactiveTintColor: '#cccccc', // Cor do texto e ícone inativo

            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'TaskList') {
                iconName = focused ? 'home' : 'home-outline'; 
              } else if (route.name === 'AddTask') {
                iconName = focused ? 'apps' : 'apps-outline'; 
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },

            tabBarLabel: ({ focused, color }) => {
              let label;

              if (route.name === 'TaskList') {
                label = 'Home'; // Texto para TaskList
              } else if (route.name === 'AddTask') {
                label = 'Tarefas'; // Texto para AddTask
              }

              return <Text style={{ color: color, fontSize: 16, fontWeight: 'bold' }}>{label}</Text>;
            },
          })}
        >
          <Tab.Screen name="TaskList" component={TaskListScreen} />
          <Tab.Screen name="AddTask" component={AddTaskScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </TaskProvider>
  );
}

export default App;
