import {View, FlatList} from 'react-native'
import { useSelector } from 'react-redux';
import MovieItem from '../components/MovieItem';

const FavoriteScreen = () => {
    const movies = useSelector(state => state.favorites.movies)
    return (
        <View>
            <FlatList 
                data={movies} 
                renderItem={({item}) => <MovieItem movie={item} key={item.id} />} 
            />
        </View>
    )
}

export default FavoriteScreen;