import { Button, FlatList, View } from "react-native"
import { DATA } from "../data"
import MovieItem from "../components/MovieItem"
import { useEffect } from "react"
import { useNavigation } from "@react-navigation/native"
import { useTheme } from "../context/themeContext"

const MovieListScreen = ({route}) => {
    const navigation = useNavigation()
    const {toggle} = useTheme()

    const category = DATA.find((category) => category.id === route.params.categoryId)
    if(!category) {
        return null
    }

    useEffect(() => {
        navigation.setOptions({
            title: category.name,
            headerRight: () => <Button title="Toggle Theme" onPress={toggle} />
        })
    }, [])

    return (
        <View>
            <FlatList 
                data={category.movies} 
                renderItem={({item}) => <MovieItem movie={item} key={item.id} />} 
            />
        </View>
    )
}

export default MovieListScreen;