import { Pressable, Text, StyleSheet, Image } from "react-native"
import { useTheme } from "../context/themeContext"

const MovieItem = ({movie}) => {
    const {theme} = useTheme()
        const onPress = () => {

    }
    return (
        <Pressable onPress={onPress} style={[styles.pressable, theme]}>
            <Image source={{uri: movie.poster_image}} style={styles.image} />
            <Text style={styles.text}>{movie.title}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 150,
    },
    pressable: {
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

export default MovieItem