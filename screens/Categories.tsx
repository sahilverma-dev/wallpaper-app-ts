import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { wallpapersCategories } from "../constants/category";
import { useNavigation } from "@react-navigation/native";

const Categories = () => {
  const { navigate } = useNavigation();
  return (
    <View className="h-full w-full flex-1">
      <FlatList
        data={wallpapersCategories}
        keyExtractor={(item) => item.image}
        numColumns={2}
        renderItem={({ item }) => (
          <View className="relative h-full w-1/2 aspect-square mr-2 my-1 rounded-md overflow-hidden">
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
                className="h-full w-full rounded-md "
              />
              <View className="absolute inset-0 w-full h-full bg-black/50 items-center justify-center">
                <Text className="text-white font-bold text-lg">
                  {item.title}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
        className="rounded-md p-2 w-full"
      />
    </View>
  );
};

export default Categories;
