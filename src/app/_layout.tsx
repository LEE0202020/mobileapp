import "@/global.css";
import { fontAssets } from "@/constants/fonts";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import { Slot } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// div == View
// Slot == Outlet
export default function TabLayout() {
    const [isReady, setIsReady] = useState(false)
    // 커스텀 폰트 로드 (assets/fonts). 실패해도 시스템 폰트로 앱은 계속 동작하도록 error 는 무시
    const [fontsLoaded, fontError] = useFonts(fontAssets)

    useEffect(() => {
        setIsReady(true)
    }, [])

    if (fontError) {
        console.warn("[fonts] 폰트 로드 실패:", fontError)
    }

    // 로딩화면 (폰트 로드 완료 전에는 렌더링하지 않아 폰트 깜빡임 방지)
    if(!isReady || (!fontsLoaded && !fontError)) {
        return (
            <SafeAreaView className="flex-1 bg-white">
                <View className="flex-1 bg-white" />
            </SafeAreaView>
        )
    }

    return (
        <ReactQueryProvider>
            <SafeAreaView className="flex-1 bg-white">
                <View className="flex-1 bg-white">
                    <Slot />
                </View>
            </SafeAreaView>
        </ReactQueryProvider>
    );
}
