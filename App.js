import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Search from './src/screens/Search';
import Reels from './src/screens/Reels';
import Shops from './src/screens/Shops';
import Profile from './src/screens/Profile';
import { Ionicons, MaterialCommunityIcons, Entypo, Feather, FontAwesome } from '@expo/vector-icons';
import Story from './src/components/Story';

export default function App() {

  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  const BottomTabScreen = () => {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            height: 50,
          },

          tabBarIcon: ({focused, size = 24}) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
              return <Ionicons name={iconName} size={size}/>;
            } else if (route.name === 'Search') {
              return focused ? <FontAwesome name="search" size={size} color="black" /> : <Ionicons name="search" size={size} color="black" />
            } else if (route.name === 'Reels') {
              iconName = focused ? 'youtube' : 'social-youtube';
              return iconName === 'youtube' ? <Entypo name="youtube" size={size} color="black" /> : <Feather name="youtube" size={size} color="black" />
            } else if (route.name === 'Shops') {
              iconName = focused ? 'shopping' : 'shopping-outline';
              return <MaterialCommunityIcons name={iconName} size={size} color="black" />
            } else if (route.name === 'Profile') {
              iconName = focused ? 'logo-react' : 'logo-react';
              return <Ionicons name={iconName} size={size}/>;
            }
            return
          },
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Reels" component={Reels} />
        <Tab.Screen name="Shops" component={Shops} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Bottom" component={BottomTabScreen} />
        <Stack.Screen name="Story" component={Story} />
      </Stack.Navigator>
    </NavigationContainer>
  )

}













// export default function App() {

//   const [fonstLoaded] = useFonts({
//     Lobster: require("./assets/fonts/Lobster-Regular.ttf")
//   })

//   useEffect(() => {
//     async function prepare() {
//       await SplashScreen.preventAutoHideAsync();
//     }
//     prepare();
//   }, [])

//   const onLayout = useCallback( async () => {
//     if(fonstLoaded) {
//       await SplashScreen.hideAsync();
//     }
//   }, [fonstLoaded])

//   if (!fonstLoaded) return null

//   return (
//     <View style={styles.container} onLayout={onLayout}>
//       <Text style={{ fontFamily: 'Lobster', fontSize: 40 }}>Instagram</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
