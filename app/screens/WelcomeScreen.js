import React from 'react';
import { View, ImageBackground, Text, StyleSheet, StatusBar, Platform, Image , SafeAreaView, Button} from 'react-native';
import AppButton from '../components/AppButton';

function WelcomeScreen() {
  return (
    <ImageBackground blurRadius={10} source={require("../assets/background.jpg")} style={styles.background}>
      <SafeAreaView style={styles.container}>
        <View style={styles.logoBlock}>
          <Image source={require("../assets/logo-red.png")} style={styles.logo} />
          <Text style={styles.tagline}>Sell What You Don't Need</Text>
        </View>
        <View style={styles.userAuthBlock}>
          <AppButton title="login" onPress={() => console.log("tapped login btn")} />
          <AppButton title="register" color='secondary' otherStyles={{marginVertical: 10}} onPress={() => console.log("tapped signup btn")} />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoBlock: {
    alignItems: 'center',
    marginTop: '8%',
  },
  logo: {
    width: 100,
    height: 100,
  },
  tagline: {
    fontSize: 25,
    fontWeight: '600',
    paddingVertical: 20,
  },
  userAuthBlock: {
    width: '100%',
    paddingHorizontal: 20,
  },
});

export default WelcomeScreen;