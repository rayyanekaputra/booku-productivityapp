
//https://www.youtube.com/watch?v=dkriklWelm0&ab_channel=JaymanyooSinghChouhan
//caranya bernavigasi dalam satu Stack dan diparentkan dengan Bottom Bar Nav

import * as React from 'react';
import { createStackNavigator} from '@react-navigation/stack';
import Dates from './components/Dates';
import Home from './components/Home';
import Settings from './components/Home/Settings';
import Insights from './components/Insights';
import Notes from './components/Notes'; 
import { useFonts } from 'expo-font';
import { AntDesign } from '@expo/vector-icons';


const Stack = createStackNavigator();

AntDesign.loadFont();

export function HomeStackNavigator(){
  const [loaded] = useFonts({
    'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Light': require('./assets/fonts/Montserrat-Light.ttf'),
  });
  
  if (!loaded) {
    return null;
  }
  return(
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Home} options = {{
          headerShown: false,
        }}/>
      <Stack.Screen name='Settings' component={Settings} options = {{
          headerTransparent: true,
          headerTitleStyle:{
            fontFamily: 'Montserrat-Bold',
            fontSize: 16,
          },
          
        }}/>
    </Stack.Navigator>
  )
}
export function NotesStackNavigator(){
    return(
      <Stack.Navigator>
        <Stack.Screen name='Notes' component={Notes} options = {{
          headerShown: false,
        }}/>
        <Stack.Screen name='Settings' component={Settings} options = {{

        }}/>
      </Stack.Navigator>
    )
  }
  export function DatesStackNavigator(){
    return(
      <Stack.Navigator>
        <Stack.Screen name='Dates' component={Dates} options = {{
          headerShown: false,
        }}/>
        <Stack.Screen name='Settings' component={Settings}/>
      </Stack.Navigator>
    )
  }
  export function InsightsStackNavigator(){
    return(
      <Stack.Navigator>
        <Stack.Screen name='Insights' component={Insights} options = {{
          headerShown: false,
        }}/>
        <Stack.Screen name='Settings' component={Settings}/>
      </Stack.Navigator>
    )
  }
