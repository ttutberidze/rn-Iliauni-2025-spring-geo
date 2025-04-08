import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ImageBackground } from 'react-native';
import GameScreen from './screens/GameScreen';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react'
import { LinearGradient } from 'expo-linear-gradient';

SplashScreen.preventAutoHideAsync()

export default function App() {
  const [loaded, error] = useFonts({
    'comic': require('./assets/fonts/comic.ttf'),
    'comicbold': require('./assets/fonts/comicbd.ttf'),
  })

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if(!loaded) {
    return null
  }

  return (
      <LinearGradient  
        colors={['yellow', 'orange', 'lime']}
        style={styles.container}
      >
        <ImageBackground 
          style={styles.imageWrapper}
          source={require('./assets/splash.jpg')}
          imageStyle={styles.image}
        >
          <GameScreen />
          <StatusBar style="auto" />
        </ImageBackground>
      </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageWrapper: {
    flex: 1,
  },
  image: {
    opacity: 0.3
  }
});
