import React from 'react'
import { View, Text, StyleSheet, Button, Image } from 'react-native'

import TitleText from '../components/TitleText'
import BodyText from '../components/BodyText'


const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <TitleText>Game Over!!!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/images/success.png')}
          style={styles.image}
          resizeMode="cover" />
      </View>
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
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    overflow:'hidden',
    marginVertical:30
  },
  image: {
    width: '100%',
    height: '100%'
  }
})

export default GameOverScreen