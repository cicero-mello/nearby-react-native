import { Categories, Places, MapView } from "@/components"
import { Category } from "@/components/categories/types"
import { useEffect, useState } from "react"
import { View, Alert } from "react-native"
import { api } from "@/services/api"
import { Market } from "@/types"

const currentLocation = {
    latitude: -23.561187293883442,
    longitude: -46.656451388116494
}

const Home = () => {
    const [categories, setCategories] = useState<Category[]>([])
    const [selectedCategoryId, setSelectedCategoryId] = useState("")
    const [markets, setMarkets] = useState<Market[]>([])

    const fetchCategories = async () => {
        try {
            const { data } = await api.get<Category[]>("/categories")
            setCategories(data)
            setSelectedCategoryId(data[0].id)
        } catch (error) {
            console.log(error)
            Alert.alert(
                "Categorias",
                "Não foi possível carregar as categorias"
            )
        }
    }

    const fetchPlaces = async (selectedCategoryId: string) => {
        try {
            const { data } = await api.get<Market[]>(
                "/markets/category/" + selectedCategoryId
            )
            setMarkets(data)
        } catch (error) {
            console.log(error)
            Alert.alert("Locais", "Não foi possível carregar os locais.")
        }
    }

    useEffect(() => {
        fetchCategories()
    }, [])

    useEffect(() => {
        if(!selectedCategoryId) return
        fetchPlaces(selectedCategoryId)
    }, [selectedCategoryId])

    return (
        <View style={{ flex: 1, backgroundColor: "grey" }}>
            <Categories
                categories={categories}
                selectedCategoryId={selectedCategoryId}
                onSelect={(id) => setSelectedCategoryId(id)}
            />
            <MapView currentLocation={currentLocation} markets={markets}/>
            <Places places={markets}/>
        </View>
    )
}

export default Home
