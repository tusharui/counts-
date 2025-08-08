import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter: {count}</Text>

      <View style={styles.buttonContainer}>
        <Button title="+1" onPress={() => setCount(count + 1)} />
        <Button title="-1" onPress={() => setCount(count - 1)} />
      </View>

      <View style={styles.resetButton}>
        <Button title="Reset" onPress={() => setCount(0)} color="red" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 20,
  },
  resetButton: {
    marginTop: 10,
  },
});
