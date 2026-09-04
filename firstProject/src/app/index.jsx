import backgroundImage from "@/assets/images/background.jpg"
import { ImageBackground, StyleSheet, Text, View } from 'react-native'

const index = () => {
  return (
    <View style={style.container}>
      <ImageBackground
        source={backgroundImage}
        style={style.background}
        resizeMode="cover"
      >
        <Text style={style.text}>Spider Man</Text>
      </ImageBackground >
    </View>
  )
}

export default index

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%"
  },
  text: {
    fontSize: 40,
    color: "black",
    fontFamily: "SpiderFont"
  }
})