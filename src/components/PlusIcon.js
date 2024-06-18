import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/styles';

const PlusIcon = ({ onPress }) => {
    return (
      <Pressable onPress={onPress} style={styles.container}>
        <Ionicons name="add" size={40} color="#FFFFFF" />
      </Pressable>
    );
};

export default PlusIcon;