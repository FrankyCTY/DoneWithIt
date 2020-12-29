import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import colors from '../config/colors'

export default function AppButton({ title, onPress, color = "primary", otherStyles = {} }) {
  return (
    <TouchableOpacity style={[styles.btn, {backgroundColor: colors[color], ...otherStyles}]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: colors.primary,
    width: '100%',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 25,
  },
  text: {
    textTransform: 'uppercase',
    color: colors.white,
    fontWeight: '600',
    fontSize: 18,
  }
})
