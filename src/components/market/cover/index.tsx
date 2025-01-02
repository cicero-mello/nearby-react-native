import { ImageBackground, View } from "react-native"
import { IconArrowLeft } from "@tabler/icons-react-native"
import { Button } from "@/components"
import { router } from "expo-router"
import { CoverProps } from "./types"
import { s } from "./styles"
import { FC } from "react"

export const Cover: FC<CoverProps> = ({
    uri
}) => {

    return (
        <ImageBackground source={{ uri }} style={s.container}>
            <View style={s.header}>
                <Button style={{ width: 40, height:40 }} onPress={() => router.back()}>
                    <Button.Icon icon={IconArrowLeft} />
                </Button>
            </View>
        </ImageBackground>
    )
}
