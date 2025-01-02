import { IconTicket } from "@tabler/icons-react-native"
import { Text, View } from "react-native"
import { colors } from "@/styles/colors"
import { CouponProps } from "./types"
import { s } from "./styles"
import { FC } from "react"

export const Coupon: FC<CouponProps> = ({
    code
}) => {

    return (
        <View style={s.container}>
            <Text style={s.title}>Utilize esse cupom</Text>

            <View style={s.content}>
                <IconTicket size={24} color={colors.green.light} />
                <Text style={s.code}>{code}</Text>
            </View>
        </View>
    )
}
