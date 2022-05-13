import * as React from 'react';
import { View, Text, StyleSheet,} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {HomeStackNavigator,
  NotesStackNavigator,
  DatesStackNavigator,
  InsightsStackNavigator} from './CustomStackNavigator'
import { useFonts } from 'expo-font';
import { AntDesign } from '@expo/vector-icons';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import colors from './assets/colors/colors';
//membentuk navbar
const Tab = createBottomTabNavigator();

export default function Tabs(){

  //ini untuk sembunyi bottomnavbar kalau dalam screen tertentu (yang mana itu screen ada dalam sebuah stack)
  const getTabBarStyleHome = (route) => {  
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
    let display = (routeName === 'Settings') ? 'none': 'flex';
    return(
      {display}
    )
  }
  const getTabBarStyleNotes= (route) => {  
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Notes';
    let display = (routeName === 'Editor') ? 'none': 'flex';
    return(
     { display}
    )
  }

    const [loaded] = useFonts({
      'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
      'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
      'Montserrat-Light': require('./assets/fonts/Montserrat-Light.ttf'),
    });
    
    if (!loaded) {
      return null;
    }
    return(
      <Tab.Navigator screenOptions = {{
        tabBarShowLabel: false,
        tabBarStyle: styles.bottomNavbar,
        headerShown: false,
        tabBarActiveTintColor: '#3333',
        tabBarInactiveTintColor: 'yellow',
      }}>
        <Tab.Screen name='HomeTab' component={HomeStackNavigator} options = {
        ({route}) =>({tabBarStyle: getTabBarStyleHome(route), tabBarIcon: ()=> (
        <View style = {styles.bottomNavbarItemWrapper}>
        <AntDesign name="home" size={24} color={colors.antiHitam} />
        <Text style = {styles.bottomNavbarItemText}>Home</Text>
        </View>
        )})
      }
/>
        <Tab.Screen name='NotesTab' component={NotesStackNavigator} options = {
        ({route}) =>({tabBarStyle: getTabBarStyleNotes(route), tabBarIcon: ()=> (
        <View style = {styles.bottomNavbarItemWrapper}>
          <AntDesign name="copy1" size={24} color={colors.antiHitam} />
          <Text style = {styles.bottomNavbarItemText}>Notes</Text>
        </View>
        )})
      }/>
        <Tab.Screen name='DatesTab' component={DatesStackNavigator} options = {{
          tabBarIcon: () => (
            <View style = {styles.bottomNavbarItemWrapper}>
              <AntDesign name="table" size={24} color={colors.antiHitam} />
              <Text style = {styles.bottomNavbarItemText}>Dates</Text>
            </View>
  
          ),
        }}/>
        <Tab.Screen name='InsightsTab' component={InsightsStackNavigator} options = {{
          tabBarIcon: () => (
            <View style = {styles.bottomNavbarItemWrapper}>
              <AntDesign name="linechart" size={24} color={colors.antiHitam} />
              <Text style = {styles.bottomNavbarItemText}>Insights</Text>
            </View>
  
          ),
        }}/>
      </Tab.Navigator>
    );
  }

  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    bottomNavbar: {
      flexDirection: 'row',
      position: 'absolute',
      backgroundColor: 'white',
      height: 75,
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
      elevation: 20,
      shadowColor: 'black',
    },
    bottomNavbarItemWrapper: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    },
    bottomNavbarItemText:{
      fontFamily: 'Montserrat-Bold',
      fontSize: 8,
    },
  
  });