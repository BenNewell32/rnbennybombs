import Ionicons from '@expo/vector-icons/Ionicons';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';


import React from 'react';
import {ImageBackground, Image, Platform ,StyleSheet, Text, View} from 'react-native';

const image = {uri: 'https://iili.io/dAGQibf.png'};

export default function TabFourScreen() {
  return (
    <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>60s Coach</Text>
      <Text style={styles.text2}>COMMING SOON</Text>

    </ImageBackground>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#ec393c80",
    height: 325,
    paddingTop: 288
  },
  text2: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#ec393c80",
    height: 325

  },
});
