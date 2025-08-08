import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  // Dynamic background color based on count
  const countBackgroundColor =
    count > 0 ? '#d4edda' : count < 0 ? '#f8d7da' : '#fff3cd'; // green, red, yellow

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isDarkMode ? '#121212' : countBackgroundColor,
        },
      ]}
    >
      <Text
        style={[
          styles.title,
          { color: isDarkMode ? '#ffffff' : '#000000' },
        ]}
      >
        Counter: {count}
      </Text>

      <View style={styles.buttonContainer}>
        <Button title="+1" onPress={() => setCount(count + 1)} />
        <Button title="-1" onPress={() => setCount(count - 1)} />
        <Button title="Reset" onPress={() => setCount(0)} />
      </View>

      <View style={{ marginTop: 20 }}>
        <Button
          title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          onPress={toggleTheme}
        />
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
  },
});
