import React from 'react'
import { Text } from 'react-native'

export default function AppText({children, otherStyles}) {
  return (
      <Text style={[otherStyles]}>{children}</Text>
  )
}
