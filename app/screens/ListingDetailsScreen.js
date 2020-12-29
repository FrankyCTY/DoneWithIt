import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

import AppText from '../components/AppText'
import ListItem from '../components/ListItem'
import colors from '../config/colors'

export default function ListingDetailsScreen() {
  return (
    <View>
      <Image source={require('../assets/chair.jpg')} style={styles.image}></Image>
      <View style={styles.detailsContainer}>        
        <AppText otherStyles={styles.title}>Red jacket for sale!</AppText>
        <AppText otherStyles={styles.price}>$100</AppText>
        <View style={styles.userContainer}>
          <ListItem 
            image={require("../assets/chair.jpg")}
            title="Mr. Chair"
            subtitle="5 Listings"
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
  },
  price: {
    fontSize: 20,
    color: colors.secondary,
    fontWeight: '600',
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 40,
  },
})