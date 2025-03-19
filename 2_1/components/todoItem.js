import { Text, View } from "react-native"
import { useEffect } from "react"

const TodoItem = ({title, children}) => {
    useEffect(() => {
        console.log('has mounted', title)
        return () => {
            console.log("has unmounted")
        }
    }, [])

    return (
        <View>
            <Text>{title}</Text>
        </View>
    )
}

// export const todoItem2 = () => {
//     return (
//         <View>
//             <Text>This is my second todo</Text>
//         </View>
//     )
// }

export default TodoItem