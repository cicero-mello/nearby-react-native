import { Text, TouchableOpacity, View, Image } from "react-native"
import { IconTicket } from "@tabler/icons-react-native"
import { colors } from "@/styles/colors"
import { PlaceProps } from "./types"
import { s } from "./styles"
import { FC } from "react"

export const Place: FC<PlaceProps> = ({
    place, ...rest
}) => {

    return (
        <TouchableOpacity style={s.container} {...rest}>
            <Image
                style={s.image}
                source={{ uri: place.cover }}
            />

            <View style={s.content}>
                <Text style={s.name}>{place.name}</Text>
                <Text style={s.description}>{place.description}</Text>

                <View style={s.footer}>
                    <IconTicket size={16} color={colors.red.base} />
                    <Text style={s.tickets}>
                        {place.coupons} cupons disponíveis
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}
