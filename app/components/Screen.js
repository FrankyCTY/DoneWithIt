import React from 'react'
import { SafeAreaView } from 'react-native'
import Constants from 'expo-constants'
import { StyleSheet } from 'react-native'

export default function Screen({children}) {
  return (
    <SafeAreaView style={styles.screen}>
      {children}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
  }
})