import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/home"
import Login from "../pages/login";

export default function StackRoutes() {
    const Stack = createNativeStackNavigator();

  return (
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login}/>
      </Stack.Navigator>

  );
}

 