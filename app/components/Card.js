import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

import AppText from './AppText'

import colors from '../config/colors'

export default function Card({title, subtitle, image}) {
  return (
    <View style={styles.container}>
      <Image resizeMode='cover' source={image} style={styles.image}/>
      <View style={styles.detailsContainer}>
        <AppText otherStyles={styles.title}>{title}</AppText>
        <AppText otherStyles={styles.subtitle}>{subtitle}</AppText> 
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 15,
    marginBottom: 7,
  },
  subtitle: {
    fontSize: 15,
    color: colors.secondary,
    fontWeight: '600',
  },
})
