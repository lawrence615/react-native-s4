import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'


const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Game Over!!!</Text>
      <Text>Number of Attempts: {props.attemptsCount} </Text>
      <Text>Number was: {props.userNumber} </Text>
      <Button title="NEW GAME" onPress={props.onRestart} />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,// meaning it shall take all the space available below the header
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default GameOverScreen