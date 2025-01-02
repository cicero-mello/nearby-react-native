import MapViewComponent, { Marker } from "react-native-maps"
import { FC, useEffect, useState } from "react"
import { MapViewProps } from "./types"
import { router } from "expo-router"

export const MapView: FC<MapViewProps> = ({
    currentLocation, markets
}) => {
    const [render, setRender] = useState(false)

    useEffect(() => {
        setTimeout(() => setRender(true), 500)
    },[])

    if (!currentLocation || !markets.length) return null

    return render && (
        <MapViewComponent
            style={{ flex: 1 }}
            initialRegion={{
                latitude: currentLocation.latitude,
                longitude: currentLocation.longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }}
            region={{
                latitude: currentLocation.latitude,
                longitude: currentLocation.longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }}
        >
            <Marker
                image={require("@/assets/location.png")}
                identifier="current"
                coordinate={{
                    latitude: currentLocation.latitude,
                    longitude: currentLocation.longitude
                }}
            />
            {markets.map((market) => (
                <Marker
                    key={market.id}
                    identifier={market.id}
                    image={require("@/assets/pin.png")}
                    coordinate={{
                        latitude: market.latitude,
                        longitude: market.longitude
                    }}
                    // @ts-ignore
                    onPress={() => router.navigate(`/market/${market.id}`)}
                >
                </Marker>
            ))}
        </MapViewComponent>
    )
}
