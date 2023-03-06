import {
  StatusBar,
  View,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { wallpapersCategories } from "../constants/category";
import WallpaperCards from "../components/WallpaperCards";
import { images } from "../constants/images";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const [num, setNum] = useState(10);
  const { navigate } = useNavigation();
  return (
    <View className="flex-1 p-2">
      <StatusBar hidden={true} />
      <ScrollView>
        <FlatList
          data={wallpapersCategories}
          keyExtractor={(item) => item.image}
          horizontal={true}
          renderItem={({ item }) => (
            <View className="relative w-40 h-12 mr-2 my-1 rounded-md overflow-hidden">
              <TouchableOpacity
                onPress={() => {
                  // @ts-ignore
                  navigate("Category", {
                    query: item.title,
                  });
                }}
              >
                <Image
                  source={{
                    uri: item.image,
                  }}
                  className="h-full w-full rounded-md"
                />
                <View className="absolute inset-0 w-full h-full bg-black/50 items-center justify-center">
                  <Text className="text-white font-bold text-lg">
                    {item.title}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
          className="rounded-md p-1"
        />
        <FlatList
          data={images.slice(0, num)}
          keyExtractor={(item) => item.id}
          renderItem={WallpaperCards}
          numColumns={2}
          className="rounded-md"
        />
        {num !== 100 && (
          <TouchableOpacity
            className="w-full py-3 bg-blue-600 rounded-md my-2"
            onPress={() => setNum(num + 10)}
          >
            <Text className="w-full text-center text-lg font-bold text-white">
              Load more Wallpapers
            </Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </View>
  );
};

export default Home;
