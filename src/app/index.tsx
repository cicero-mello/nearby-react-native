import { Welcome, Steps } from "@/components"
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
        </View>
    )
}

export default App
