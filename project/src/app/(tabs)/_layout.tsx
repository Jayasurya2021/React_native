import { Tabs } from "expo-router";
import { Pressable } from "react-native";

export default function TabsLayout() {
    return <Tabs screenOptions={{ headerShown: false }}>
        <Tabs.Screen name="index" options={{ title: "Home" }} />
        <Tabs.Screen name="explore" options={{ title: "Explore" }} />
        <Tabs.Screen name="account" options={{
            tabBarButton: (props) => (
                <Pressable {...props} disabled={true} />
            ),
        }} />
    </Tabs>
}
