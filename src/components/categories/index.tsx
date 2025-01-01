import { FlatList, View } from "react-native"
import { CategoriesProps } from "./types"
import { Category } from "../category"
import { s } from "./styles"
import { FC } from "react"

export const Categories: FC<CategoriesProps> = ({
    categories, selectedCategoryId, onSelect
}) => {

    return (
        <View>
            <FlatList
                data={categories}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={s.content}
                style={s.container}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Category
                        name={item.name}
                        iconId={item.id}
                        isSelected={item.id === selectedCategoryId}
                        onPress={() => onSelect(item.id)}
                    />
                )}
            />
        </View>
    )
}
