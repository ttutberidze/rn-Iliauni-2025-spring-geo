import { FlatList, View } from "react-native"
import { DATA } from "../data";
import CategoryItem from '../components/CategoryItem'

const CategoryListScreen = ({route, navigation}) => {
    return (
        <View>
            <FlatList
                data={DATA}
                renderItem={({item}) => <CategoryItem category={item} key={item.id} />}
            />
        </View>
    )
}

export default CategoryListScreen;