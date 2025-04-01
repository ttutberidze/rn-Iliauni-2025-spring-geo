import { Button, TextInput, StyleSheet } from "react-native"
import { useEffect, useRef, useState } from "react"

const AddItem = ({addTodo}) => {
    const [textInputValue, setTextInputValue] = useState('')
    const inputRef = useRef()
    const numberRef = useRef(10)
    
    useEffect(() => {
        inputRef.current.focus()
    }, [])

    const addTodoItemHandler = () => {
        addTodo(textInputValue);
        setTextInputValue('')
    }

    return (
        <>
            <Button onPress={() => numberRef.current += 10} title="Increment Ref" />
            <Button onPress={addTodoItemHandler} title='Add Todo' />
            <TextInput 
                ref={inputRef}
                style={styles.textInput}
                value={textInputValue} 
                onChangeText={(text) => setTextInputValue(text)} 
            />
        </>
    )
}

export default AddItem

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: 'lime',
    width: '100%'
  }
});
