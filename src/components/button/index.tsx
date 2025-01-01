import { ButtonBase, ContainerProps, ButtonSubComponents, IconProps, TitleProps } from "./types"
import { TouchableOpacity, Text, ActivityIndicator } from "react-native"
import { colors } from "@/styles/theme"
import { s } from "./styles"
import { FC } from "react"

const Container: FC<ContainerProps> = ({
    children, style, isLoading, ...rest
}) => {

    return (
        <TouchableOpacity
            style={[s.container, style]}
            activeOpacity={0.8}
            disabled={isLoading}
            {...rest}
        >
            {!isLoading ? children :
                <ActivityIndicator
                    size="small"
                    color={colors.gray[100]}
                />
            }
        </TouchableOpacity>
    )
}

const Title: FC<TitleProps> = ({ children, ...rest }) => {
    return (
        <Text style={s.title} {...rest}>
            {children}
        </Text>
    )
}

const Icon: FC<IconProps> = ({ icon: Icon, ...rest }) => {
    return <Icon size={24} color={colors.gray[100]} {...rest} />
}

export const Button = Object.assign<ButtonBase, ButtonSubComponents>(
    Container, { Title, Icon }
)

// Se fosse usar function convencional, não seria necessário o
// Object.assign, nem as suas tipagens. Bastaria fazer o seguinte
// (após trocar o nome "Container" para "Button"):

// Button.Title = Title
// Button.Icon = Icon
// export { Button }

// Ainda assim, optei em manter o padrão de arrow functions
