import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MainLayout from '../layouts/MainLayout';

const AboutScreen = () => {
  const currentYear = new Date().getFullYear();

  return (
    <MainLayout>
      <View style={styles.container}>
        <Text style={styles.title}>My To Do List App</Text>
        <Text style={styles.text}>Developed by: Wei Dai</Text>
        <Text style={styles.text}>Date: 11-23-2023</Text>
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
  },
});

export default AboutScreen;

