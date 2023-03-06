import { View, Text, TouchableOpacity, TextInput } from "react-native";

// icons
import { Entypo, Ionicons, AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { NavigationItem, navigationData } from "../constants/navigation";
import { useNavigation } from "@react-navigation/native";

const Navigation = () => {
  // states
  const [showNavigation, setShowNavigation] = useState<boolean>(false);
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");

  // useNavigation
  const { navigate } = useNavigation();

  // submit search
  const submitSearch = () => {
    if (searchQuery.length > 0) {
      console.log(searchQuery);
      setSearchQuery("");
      setShowSearch(false);
      // @ts-ignore
      navigate("Search", {
        query: searchQuery,
      });
    }
  };

  return (
    <>
      <View className="w-full px-2 py-3 flex-row items-center justify-between bg-white">
        <TouchableOpacity
          className="bg-yellow-400 aspect-square p-2 rounded-md "
          onPress={() => {
            setShowNavigation(!showNavigation);
            setShowSearch(false);
          }}
        >
          {showNavigation ? (
            <AntDesign name="close" size={17} color="black" />
          ) : (
            <Entypo name="menu" size={20} color="black" />
          )}
        </TouchableOpacity>
        <Text className="text-2xl font-bold">Wallpaper App</Text>
        <TouchableOpacity
          className="bg-blue-500 aspect-square p-2 rounded-md "
          onPress={() => {
            setShowSearch(!showSearch);
            setShowNavigation(false);
          }}
        >
          {showSearch ? (
            <AntDesign name="close" size={17} color="white" />
          ) : (
            <Ionicons name="search" size={20} color="white" />
          )}
        </TouchableOpacity>
      </View>
      {showNavigation && (
        <View className="fixed bg-black/80 inset-0 w-full z-10 p-4">
          {navigationData?.map((item: NavigationItem) => (
            <TouchableOpacity
              key={item.id}
              className="my-2"
              onPress={() => {
                setShowNavigation(false);
                // @ts-ignore
                navigate(item.title);
              }}
            >
              <Text className="font-bold text-xl text-white">{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
      {showSearch && (
        <View className="fixed bg-black/80 flex-row items-center inset-0 w-full z-10 py-3 px-4">
          <TextInput
            placeholder="Search for wallpapers"
            className="text-black bg-white px-3 py-1 rounded-md flex-grow mr-3"
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
            returnKeyType="search"
            onSubmitEditing={submitSearch}
          />
          <TouchableOpacity
            className="bg-blue-500 aspect-square p-2 rounded-md "
            onPress={submitSearch}
          >
            <Ionicons name="search" size={20} color="white" />
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default Navigation;
