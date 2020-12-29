import React from 'react'
import { View, Image, StyleSheet, SafeAreaView, Platform, StatusBar, Dimensions } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors'

export default function  ViewImageScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.btnsBlock}>
        <MaterialCommunityIcons name="close" color={colors.white} size={30} />
        <MaterialCommunityIcons name="trash-can-outline" color={colors.white} size={35} />
      </View>
      <Image resizeMode='contain' source={require("../assets/chair.jpg")} style={styles.image} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  btnsBlock: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: "space-between",
    paddingHorizontal: '5%',
  },
  deleteBtn: {
    width: 40,
    height: 40,
    backgroundColor: colors.secondary,
  },
  image: {
    width: '100%',
    height: '100%',
    transform: [{
      translateY: -Dimensions.get('window').height * 0.05
    }]
  },
})
