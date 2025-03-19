import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import TodoItem from './components/todoItem'
import { useEffect, useState } from 'react';
// import Todo, { todoItem2 as TodoItem2 } from './components/todoItem'

export default function App() {
  const [textInputValue, setTextInputValue] = useState('')
  const [todos, setTodos] = useState([{title: "Buy some eggs"}])

  useEffect(() => {
    console.log('todos has changed', todos)
    return () => {
      console.log("todos cleanup", todos)
    }
  }, [todos])

  // useEffect(() => {
  //   console.log('component updated')
  // })

  const addTodo = () => {
    setTodos((prev) => {
      return [...prev, {title: textInputValue}]
    })
    // setTodos([...todos, {title: textInputValue}])
    setTextInputValue('')
  }

  return (
    <View style={styles.container}>
      <Text>{textInputValue}</Text>
      <Button onPress={addTodo} title='Add Todo' />
      <TextInput 
        value={textInputValue} 
        onChangeText={(text) => setTextInputValue(text)} 
      />
      {todos.map((todo, index) => {
        return <TodoItem key={index} title={todo.title} />;
      })}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
