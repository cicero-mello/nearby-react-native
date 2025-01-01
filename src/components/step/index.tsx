import { View, Text } from "react-native"
import { colors } from "@/styles/theme"
import { StepProps } from "./types"
import { s } from "./styles"

export const Step = ({
    title, description, icon: Icon
}: StepProps) => {

    return (
        <View style={s.container}>
            <Icon size={32} color={colors.red.base}/>
            <View style={s.details}>
                <Text style={s.title}>{title}</Text>
                <Text style={s.description}>{description}</Text>
            </View>
        </View>
    )
}
