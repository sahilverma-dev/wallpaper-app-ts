import { View, Text, Image, ScrollView, FlatList } from "react-native";
import { images } from "../constants/images";
import WallpaperCards from "../components/WallpaperCards";

const SingleWallpaper = ({ route }: any) => {
  const id = "112370df-8498-43a3-ac53-8899394515d1";
  const image = images.find((img) => img.id === id);
  return (
    <View className="w-full h-full flex-1 p-2">
      <ScrollView>
        <Text className="text-2xl font-bold capitalize my-2">
          {image?.title}
        </Text>
        <Image
          source={{
            uri: image?.src,
          }}
          style={{
            height: 500,
          }}
          className="w-full h-full rounded-md"
        />
        <Text className="my-2 text-base font-semibold p-1">
          More Wallpapers
        </Text>
        <FlatList
          data={images.slice(0, 20)}
          keyExtractor={(item) => item.id}
          renderItem={WallpaperCards}
          numColumns={2}
          className="rounded-md"
        />
      </ScrollView>
    </View>
  );
};

export default SingleWallpaper;
