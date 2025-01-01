import { GestureHandlerRootView } from "react-native-gesture-handler"
import { colors } from "@/styles/theme"
import { Loading } from "@/components"
import { Stack } from "expo-router"
import {
    useFonts,
    Rubik_600SemiBold,
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_700Bold
} from "@expo-google-fonts/rubik"

const Layout = () => {
    const [isFontsLoaded] = useFonts({
        Rubik_600SemiBold,
        Rubik_400Regular,
        Rubik_500Medium,
        Rubik_700Bold
    })

    if(!isFontsLoaded) return <Loading />

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Stack screenOptions={{
                headerShown: false,
                contentStyle: { backgroundColor: colors.gray[100]}
            }}/>
        </GestureHandlerRootView>
    )
}

export default Layout
