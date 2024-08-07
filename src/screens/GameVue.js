import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import GameList from '../components/GameList';

export default function GameVue({ navigation }) {
  return (
    <View style={styles.container}>
      <GameList />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('AddGame')}
      >
        <Text style={styles.buttonText}>Add a Game</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  button: {
    backgroundColor: '#ff4d4d', // Red background
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20, // Space above the button
    alignItems: 'center',
    justifyContent: 'center',
    // Ensure button is smaller than game containers
    width: '70%', // Adjust as needed
    maxWidth: 300, // Limit maximum width
  },
  buttonText: {
    color: '#fff', // White text
    fontSize: 16,
    fontWeight: 'bold',
  },
});
