import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoryListScreen from './screens/CategoryListScreen';
import MovieListScreen from './screens/MovieListScreen';
import ThemeContextProvider from './context/themeContext';
import MovieScreen from './screens/MovieScreen';
import { Provider } from 'react-redux';
import store from './store/store';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FavoriteScreen from './screens/FavoriteScreen';

const Stack = createNativeStackNavigator()
const BottomTabs = createBottomTabNavigator()

const HomeScreen = () => {
  return (
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
      <Stack.Screen
        name="MovieScreen"
        component={MovieScreen}
      />
    </Stack.Navigator>
  )
}

const BottomTabsNavigator = () => {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen 
        name='Home'
        component={HomeScreen}
        options={{
          headerShown: false
        }}
      />
      <BottomTabs.Screen 
        name='Favorites'
        component={FavoriteScreen}
      />
    </BottomTabs.Navigator>
  )
}

export default function App() {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <View style={styles.container}>
          <NavigationContainer>
            <BottomTabsNavigator />
          </NavigationContainer>
          <StatusBar style="auto" />
        </View>
      </ThemeContextProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
