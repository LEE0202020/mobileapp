import { Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'

export default function TabsLayout() {
    return (
        <Tabs screenOptions={{ headerShown: false }}>
            <Tabs.Screen
                name='home'
                options={{
                    title: "홈",
                    tabBarIcon: ({ color, size, focused }) => (
                        <Ionicons name={focused ? "home" : "home-outline"} size={size} color={color} />
                    )
                }}
            />
            <Tabs.Screen
                name='pregnancy-guide'
                options={{
                    title: "임신 정보",
                    tabBarIcon: ({ color, size, focused }) => (
                        <Ionicons name={focused ? "book" : "book-outline"} size={size} color={color} />
                    )
                }}
            />
            <Tabs.Screen
                name='facilities'
                options={{
                    title: "주변 시설",
                    tabBarIcon: ({ color, size, focused }) => (
                        <Ionicons name={focused ? "location" : "location-outline"} size={size} color={color} />
                    )
                }}
            />
            <Tabs.Screen
                name='community'
                options={{
                    title: "커뮤니티",
                    tabBarIcon: ({ color, size, focused }) => (
                        <Ionicons name={focused ? "chatbubbles" : "chatbubbles-outline"} size={size} color={color} />
                    )
                }}
            />
            <Tabs.Screen
                name='my'
                options={{
                    title: "마이",
                    tabBarIcon: ({ color, size, focused }) => (
                        <Ionicons name={focused ? "person" : "person-outline"} size={size} color={color} />
                    )
                }}
            />
        </Tabs>
    )
}
