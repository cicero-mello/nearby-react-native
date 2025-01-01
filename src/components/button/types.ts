import { IconProps as TablerIconProps } from "@tabler/icons-react-native"
import { TextProps, TouchableOpacityProps } from "react-native"
import { ComponentType, FC } from "react"

export interface ContainerProps extends TouchableOpacityProps {
    isLoading?: boolean
}

export interface IconProps extends TablerIconProps {
    icon: ComponentType<TablerIconProps>
}

export type TitleProps = TextProps

export type ButtonBase = FC<ContainerProps>

export interface ButtonSubComponents {
    Title: FC<TitleProps>,
    Icon: FC<IconProps>
}
