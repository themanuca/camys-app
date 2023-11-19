import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/home"
import Login from "../pages/login";
import CreateList from "../pages/createList";
import cardListaItens from "../components/cardListaItens";

export default function StackRoutes() {
    const Stack = createNativeStackNavigator();

  return (
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="CreateList" component={CreateList}/>
        <Stack.Screen name="ListItens" component={cardListaItens}/>
      </Stack.Navigator>

  );
}

 