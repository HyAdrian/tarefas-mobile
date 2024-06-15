import React from 'react';
import { View, Text, Pressable, StyleSheet, Button } from 'react-native';

function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
 
      <Pressable style={styles.button} onPress={()=> navigation.navigate("TaskList")}>
        <Text style={styles.buttonText}>Task List</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={()=> navigation.navigate("AddTask")}>
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#151515',
  },
  button: {
    backgroundColor: '#6200ee',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

})

export default HomeScreen;