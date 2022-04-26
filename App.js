import * as React from 'react';
import 'react-native-gesture-handler'
import { View, Text, StyleSheet,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './CustomBottomTabsNavigator'
import { AntDesign } from '@expo/vector-icons';

AntDesign.loadFont();

//root dari semua fungsi, tempatnya dipanggil dll
export default function App() {
  return (
    
    <NavigationContainer>
      <Tabs/>
    </NavigationContainer>
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
