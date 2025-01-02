import { IconPhone, IconMapPin, IconTicket } from "@tabler/icons-react-native"
import { View, Text } from "react-native"
import { DetailsProps } from "./types"
import { Info } from "../info"
import { s } from "./styles"
import { FC } from "react"

export const Details: FC<DetailsProps> = ({
    market
}) => {

    return (
        <View style={s.container}>
            <Text style={s.name}>
                {market.name}
            </Text>
            <Text style={s.description}>
                {market.description}
            </Text>

            <View style={s.group}>
                <Text style={s.title}>Regulamento</Text>
                    {market.rules.map((rule) => (
                        <Text
                            key={rule.id}
                            style={s.rule}
                        >
                            {`\u2022  ${rule.description }`}
                        </Text>
                    ))}
            </View>

            <View style={s.group}>
                <Text style={s.title}>
                    Informações
                </Text>
                <Info
                    description={market.coupons + " cupons disponíveis"}
                    icon={IconTicket}
                />
                <Info description={market.address} icon={IconMapPin} />
                <Info description={market.phone} icon={IconPhone} />
            </View>
        </View>
    )
}
