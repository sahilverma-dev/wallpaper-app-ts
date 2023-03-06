import { View, Text, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import WallpaperCards from "../components/WallpaperCards";
import { images } from "../constants/images";

const Category = ({ route }: any) => {
  return (
    <View className="flex-1 p-2">
      <Text className="text-xl font-bold inline-flex my-3">
        Wallpaper for {route?.params?.query}
      </Text>
      <StatusBar hidden={true} />
      <FlatList
        data={images.slice(0, 10)}
        keyExtractor={(item) => item.id}
        renderItem={WallpaperCards}
        numColumns={2}
        className="rounded-md"
      />
    </View>
  );
};

export default Category;
