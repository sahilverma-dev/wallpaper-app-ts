import { View, Image, TouchableOpacity } from "react-native";

// icons
import { Entypo } from "@expo/vector-icons";
import { Wallpaper } from "../interfaces/wallpapers";
import { useNavigation } from "@react-navigation/native";

interface Props {
  item: Wallpaper;
  // liked: boolean;
}

const WallpaperCards = ({ item }: Props) => {
  // useNavigation
  // const { navigate } = useNavigation();
  return (
    <View className="relative p-1 w-1/2 h-80">
      <View className="absolute p-1.5 top-3 right-3 bg-white rounded-full aspect-square z-10">
        {/* {liked ? ( */}
        <Entypo name="heart" size={17} color="black" />
        {/* ) : (
          <Entypo name="heart-outlined" size={17} color="black" />
        )} */}
      </View>
      <TouchableOpacity
        onPress={() => {
          console.log(item.id);
          // @ts-ignore
          // navigate("SingleWallpaper", {
          //   id: item.id,
          // });
        }}
      >
        <Image
          source={{ uri: item.src }}
          resizeMode="cover"
          className="rounded-md w-full h-full"
        />
      </TouchableOpacity>
    </View>
  );
};

export default WallpaperCards;
