import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  Touchable,
  ImageBackground,
  Image
} from "react-native";
import { Assets } from "react-navigation-stack";

const HomeScreen = ({navigation}) => {
  return (
    <ImageBackground style={styles.bgImage}
      source={require('../../assets/truck-mountains.jpg')} resizeMode="cover">
    <View>
      <Text>
      <Image style={[styles.logoImage, {tintColor: '#FF4500'}]}
      source={require('../../assets/balance-logo.png')} />
      <Button
        title="Go to Components Demo"
        onPress={() => navigation.navigate("Components")}
      />
      <Button
        title="Go to List Demo"
        onPress={() => navigation.navigate("List")}
      />
      <Button
        title="Go to Image Demo"
        onPress={() => navigation.navigate("Image")}
      />
      <Button
        title="Go to Counter Demo"
        onPress={() => navigation.navigate("Counter")}
      />
      <Button
        title="Go to Color Demo"
        onPress={() => navigation.navigate("Color")}
      /> <Button
      title="Go to Square Demo"
      onPress={() => navigation.navigate("Square")}
    />
      </Text>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  container: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
    justifyContent: "center",
    opacity: 0.6
  },
  logoImage: {
    height: 40,
    width: 300,
    justifyContent: 'center',
    position: 'relative',
    right: -50,
      top: -200
  }
});

export default HomeScreen;
