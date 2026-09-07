import { Link } from "expo-router";
import { Text, View } from 'react-native';

const explore = () => {
    return (
        <View className="flex-1 items-center justify-center bg-white">
            <Text className="text-xl font-bold text-blue-500">explore</Text>
            <Link href="../" className="mt-6 rounded-lg bg-black px-6 py-3" >
                <Text className="color-amber-50">index
                </Text>
            </Link>
        </View>
    )
}

export default explore