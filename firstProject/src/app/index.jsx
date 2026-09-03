import { StyleSheet, Text, View } from 'react-native'

const index = () => {
  return (
    <View style={style.container}>
      <Text style={style.text}>hello</Text>
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
  text:{
    fontSize:40,
    color: "green",
    backgroundColor: "while"
  }
})