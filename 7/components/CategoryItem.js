import { useNavigation } from "@react-navigation/native"
import { Text, StyleSheet, Pressable } from "react-native"
import { useTheme } from "../context/themeContext"

const CategoryItem = ({category}) => {
    const navigation = useNavigation()
    const {theme} = useTheme()

    const onPress = () => {
        navigation.navigate('MovieListScreen', {
            categoryId: category.id
        })
    }

    return (
        <Pressable onPress={onPress} style={[styles.pressable, theme]} android_ripple={{color: 'lightgrey'}}>
            <Text style={styles.text}>{category.name}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    pressable: {
        paddingVertical: 32,
        borderWidth: 2,
        borderColor: 'lime',
        marginVertical: 8,
        marginHorizontal: 4
    },
    text: {
        fontSize: 24,
        textAlign: 'center'
    }
})

export default CategoryItem;