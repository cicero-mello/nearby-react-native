import { Text, View } from "react-native"
import { colors } from "@/styles/theme"
import { InfoProps } from "./types"
import { s } from "./styles"
import { FC } from "react"

export const Info: FC<InfoProps> = ({
    description, icon: Icon
}) => {

    return (
        <View style={s.container}>
            <Icon size={16} color={colors.gray[400]} />
            <Text style={s.text}>{description}</Text>
        </View>
    )
}
