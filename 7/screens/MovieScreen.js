import { useEffect } from "react"
import { View, Text, Image, StyleSheet, Button } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { toggle } from "../store/slices/favoritesSlice"

const MovieScreen = ({route, navigation}) => {
    const {movie} = route.params
    const dispatch = useDispatch()
    const movies = useSelector((state) => state.favorites.movies)
    const isLiked = !!movies.find(({id}) => id === movie.id)

    const onPress = () => {
        dispatch(toggle({movie}))
    }

    useEffect(() => {
        navigation.setOptions({
            title: movie.name,
            headerRight: () => <Button title={isLiked ? 'Unlike' : 'Like'} onPress={onPress} />
        })
    }, [isLiked])

    return (
        <View style={styles.wrapper}>
            <Image source={{uri: movie.poster_image}} style={styles.image} />
            <Text style={styles.text}>{movie.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 150,
    },
    wrapper: {
        paddingVertical: 32,
        borderWidth: 2,
        borderColor: 'lime',
        marginVertical: 8,
        marginHorizontal: 4,
        alignItems: 'center'
    },
    text: {
        fontSize: 24,
        textAlign: 'center'
    }
})

export default MovieScreen