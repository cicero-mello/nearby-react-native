import { Text, Pressable } from "react-native"
import { CategoryProps } from "./types"
import { s } from "./styles"
import { FC } from "react"
import { categoriesIcons } from "@/utils/categories-icons"
import { colors } from "@/styles/theme"

export const Category: FC<CategoryProps> = ({
    iconId, isSelected, name, ...rest
}) => {
    const Icon = categoriesIcons[iconId]

    return (
        <Pressable
            style={[s.container, isSelected && s.containerSelected]}
            {...rest}
        >
            <Icon size={16} color={colors.gray[isSelected ? 100 : 400]}/>
            <Text style={[s.name, isSelected && s.nameSelected]}>
                {name}
            </Text>
        </Pressable>
    )
}
