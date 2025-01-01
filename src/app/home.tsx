import { Category } from "@/components/categories/types"
import { Place } from "@/components/place/types"
import { Categories, Places } from "@/components"
import { useEffect, useState } from "react"
import { View, Alert } from "react-native"
import { api } from "@/services/api"

const Home = () => {
    const [categories, setCategories] = useState<Category[]>([])
    const [selectedCategoryId, setSelectedCategoryId] = useState("")
    const [places, setPlaces] = useState<Place[]>([])

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
            const { data } = await api.get<Place[]>(
                "/markets/category/" + selectedCategoryId
            )
            setPlaces(data)
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
            <Places places={places}/>
        </View>
    )
}

export default Home
