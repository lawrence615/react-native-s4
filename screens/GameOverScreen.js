import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

import TitleText from '../components/TitleText'
import BodyText from '../components/BodyText'


const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <TitleText>Game Over!!!</TitleText>
      <BodyText>Number of Attempts: {props.attemptsCount} </BodyText>
      <BodyText>Number was: {props.userNumber} </BodyText>
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