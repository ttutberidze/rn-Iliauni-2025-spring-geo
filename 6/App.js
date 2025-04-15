import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoryListScreen from './screens/CategoryListScreen';
import MovieListScreen from './screens/MovieListScreen';
import ThemeContextProvider from './context/themeContext';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <ThemeContextProvider>
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerTitleAlign: 'center',
            headerTintColor: 'lime',
            headerStyle: {
              backgroundColor: 'red',
            }
          }}>
            <Stack.Screen
              name="CategoryListScreen"
              component={CategoryListScreen}
              options={{
                title: 'Categories',
              }}
            />
            <Stack.Screen
              name="MovieListScreen"
              component={MovieListScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar style="auto" />
      </View>
    </ThemeContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
