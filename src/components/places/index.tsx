import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet"
import { Text, useWindowDimensions } from "react-native"
import { PlacesProps } from "./types"
import { FC, useRef } from "react"
import { Place } from "../place"
import { s } from "./styles"

export const Places: FC<PlacesProps> = ({
    places
}) => {

    const dimensions = useWindowDimensions()
    const bottomSheetRef = useRef<BottomSheet>(null)

    const snapPoints = {
        min: 178,
        max: dimensions.height - 128
    }

    return (
        <BottomSheet
            ref={bottomSheetRef}
            snapPoints={[snapPoints.min, snapPoints.max]}
            handleIndicatorStyle={s.indicator}
            backgroundStyle={s.container}
            enableDynamicSizing={false}
            enablePanDownToClose={false}
        >
            <BottomSheetFlatList
                data={places}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <Place place={item}/>}
                contentContainerStyle={s.content}
                ListHeaderComponent={() => (
                    <Text style={s.title}>
                        Explore locais perto de você
                    </Text>
                )}
                showsVerticalScrollIndicator={false}
            />
        </BottomSheet>
    )
}
