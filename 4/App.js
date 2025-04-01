import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, View } from 'react-native';
import TodoItem from './components/todoItem'
import { useState, useCallback } from 'react';
import AddItem from './components/addItem';

export default function App() {
  const [todos, setTodos] = useState([
    {title: "Buy some eggs", id: Math.random()},
    {title: "Buy some eggs", id: Math.random()},
  ])

  const addTodo = (textInputValue) => {
    setTodos((prev) => {
      return [...prev, {title: textInputValue, id: Math.random()}]
    })
  }

  const removeTodo = useCallback((index) => {
    setTodos((prevTodos) => {
      prevTodos.splice(index, 1)
      return [...prevTodos]
    })
  }, [])

  return (
    <View style={styles.container}>
      <AddItem addTodo={addTodo} />
      {/* <ScrollView>
        {todos.map((todo, index) => {
          return <TodoItem 
                    key={todo.id} 
                    index={index}
                    title={todo.title} 
                    remove={removeTodo} 
                  />;
        })}
      </ScrollView> */}
      <FlatList
        data={todos}
        renderItem={({item, index}) => <TodoItem 
                                  key={item.id} 
                                  index={index}
                                  title={`${item.title}-${index}`} 
                                  remove={removeTodo} 
                                />}
        keyExtractor={({id}) => id}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    margin: 10,
    padding: 10,
  },
});
