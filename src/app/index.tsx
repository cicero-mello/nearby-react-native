import { Welcome, Steps, Button } from "@/components"
import { router } from "expo-router"
import { View } from "react-native"

const App = () => {

    return (
        <View style={{
            flex: 1,
            padding: 40,
            paddingTop: 32,
            gap: 40,
        }}>
            <Welcome />
            <Steps />
            <Button onPress={() => router.navigate("/home")}>
                <Button.Title> Começar </Button.Title>
            </Button>
        </View>
    )
}

export default App
