import { IconProps } from "@tabler/icons-react-native"
import { ComponentType } from "react"

export interface StepProps {
    title: string
    description: string
    icon: ComponentType<IconProps>
}
