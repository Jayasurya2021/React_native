import "@/global.css";
import {
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";

import { useState } from "react";
import { TouchableWithoutFeedback } from "react-native";

export default function Home() {

  const [username, setUsername] = useState("surya");



  return (
    <ScrollView className="flex-1 bg-white">

      {/* Header */}
      <View className="px-5 pt-14 pb-5">
        <View className="flex-row items-center justify-between">

          <View>
            <Text className="text-gray-500 text-sm">
              Good Morning
            </Text>

            <Text className="text-2xl font-bold text-black mt-1">
              Hello, {username}!
            </Text>
          </View>

          <Pressable className="bg-gray-100 p-3 rounded-full">
            <Text className="text-lg">🔔</Text>
          </Pressable>

        </View>
      </View>

      {/* Search */}
      <View className="px-5">
        <TextInput
          placeholder="Search something..."
          placeholderTextColor="#9CA3AF"
          className="bg-gray-100 rounded-xl px-4 py-4 text-black"
        />
      </View>

      {/* Categories */}
      <View className="mt-7 px-5">

        <Text className="text-xl font-bold text-black">
          Categories
        </Text>

        <View className="flex-row justify-between mt-4">


          <Pressable className="bg-blue-100 w-[30%] p-4 rounded-2xl items-center">
            <Text className="text-2xl">💻</Text>
            <Text className="font-semibold mt-2">
              Tech
            </Text>
          </Pressable>

          <Pressable className="bg-purple-100 w-[30%] p-4 rounded-2xl items-center">
            <Text className="text-2xl">📱</Text>
            <Text className="font-semibold mt-2">
              Apps
            </Text>
          </Pressable>

          <Pressable className="bg-orange-100 w-[30%] p-4 rounded-2xl items-center">
            <Text className="text-2xl">🎮</Text>
            <Text className="font-semibold mt-2">
              Games
            </Text>
          </Pressable>

        </View>
      </View>

      {/* Popular */}
      <View className="mt-8 px-5">

        <Text className="text-xl font-bold text-black mb-4">
          Popular
        </Text>

        <View className="bg-black rounded-3xl p-6">

          <Text className="text-gray-400">
            FEATURED COURSE
          </Text>

          <Text className="text-white text-2xl font-bold mt-2">
            Learn React Native
          </Text>

          <Text className="text-gray-300 mt-2">
            Build beautiful mobile apps with React Native.
          </Text>

          <Pressable className="bg-white rounded-xl px-5 py-3 mt-5 self-start">
            <Text className="text-black font-bold">
              Start Learning →
            </Text>
          </Pressable>

        </View>
      </View>

      {/* Recommended */}
      <View className="mt-8 px-5 pb-10">

        <Text className="text-xl font-bold text-black mb-4">
          Recommended
        </Text>

        <View className="flex-row gap-4">

          <View className="bg-gray-100 rounded-2xl p-4 flex-1">
            <Text className="text-3xl">⚛️</Text>

            <Text className="font-bold text-lg mt-3">
              React
            </Text>

            <Text className="text-gray-500 mt-1">
              Beginner
            </Text>
          </View>

          <View className="bg-gray-100 rounded-2xl p-4 flex-1">
            <Text className="text-3xl">🚀</Text>

            <Text className="font-bold text-lg mt-3">
              Expo
            </Text>

            <Text className="text-gray-500 mt-1">
              Beginner
            </Text>
          </View>

        </View>
      </View>
      <View>
        <TouchableOpacity underlayColor="#d97706" onPress={() => alert("click")}>

          <Text className="bg-amber-400 p-4 m-4 text-center text-xl border-2 border-amber-50 rounded-2xl text-amber-50" >
            TouchableOpacity
          </Text>
        </TouchableOpacity>
        <TouchableHighlight onPress={() => alert("touchable highlight")}>
          <Text className="bg-amber-400 p-4 m-4 text-center text-xl rounded-2xl text-white ">
            TouchableHighlight
          </Text>
        </TouchableHighlight>
        <TouchableWithoutFeedback onPress={() => alert("TouchableWithoutFeedback")}>
          <Text className="bg-amber-400 p-4 m-4 text-center text-xl border-2 border-amber-50 rounded-2xl text-amber-50">
            TouchableWithoutFeedback
          </Text>
        </TouchableWithoutFeedback>
      </View>

    </ScrollView>
  );
}

