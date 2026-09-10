import { router } from "expo-router";
import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
const Login = () => {


    const [email, setEmail] = useState("")


    async function onpressablesubmit() {
        try {
            const res = await axios("https://react-native-project-s3j2.onrender.com/api/auth/sendOtp",
                {
                    method: "POST",
                    data: { email: email }
                })
            if (res) {
                setEmail("")
                alert("succesfully")
                router.push("/otpverification")
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (

        <View className="flex-1 items-center justify-center bg-white">
            <View className="flex-1 items-center justify-center w-2xs ">
                <Text className="m-4">Opt verifiation</Text>
                <TextInput placeholder='Enter your Email' className="mb-4 w-full  rounded-xl border border-gray-400 p-4" value={email} onChangeText={setEmail} />
                <TouchableOpacity className="w-full" onPress={onpressablesubmit}>
                    <Text className=" bg-amber-300 text-center text-amber-50 p-4 rounded-3xl">
                        Send otp
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login