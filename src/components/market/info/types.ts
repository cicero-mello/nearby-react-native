import { IconProps } from "@tabler/icons-react-native"
import { ComponentType } from "react"

export interface InfoProps {
    description: string
    icon: ComponentType<IconProps>
}
