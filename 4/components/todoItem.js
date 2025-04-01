import { Text, StyleSheet, Pressable } from "react-native"
import { memo } from "react"

const TodoItem = ({title, remove, index}) => {
    // console.log(title)
    return (
        <Pressable onPress={() => remove(index)} style={styles.todoItem}>
            <Text>{title}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    todoItem: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'lightgrey',
        marginVertical: 5,
        paddingVertical: 10,

    }
})

export default memo(TodoItem)