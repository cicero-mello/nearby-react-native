import { Market } from "@/types"

interface Location {
    latitude: number
    longitude: number
}

export interface MapViewProps {
    currentLocation: Location,
    markets: Market[]
}
