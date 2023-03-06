import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// components
import Navigation from "./components/Navigation";

// screens
import Home from "./screens/Home";
import Categories from "./screens/Categories";
import Explore from "./screens/Explore";
import Login from "./screens/Login";
import Search from "./screens/Search";
import SingleWallpaper from "./screens/SingleWallpaper";
import Category from "./screens/Category";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Navigation />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="Explore" component={Explore} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Category" component={Category} />
        <Stack.Screen name="SingleWallpaper" component={SingleWallpaper} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
