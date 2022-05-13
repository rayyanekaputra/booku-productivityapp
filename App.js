import React, { useCallback, useEffect, useState } from 'react';
import 'react-native-gesture-handler'
import {View} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import Tabs from './CustomBottomTabsNavigator';
import * as SplashScreen from 'expo-splash-screen';
import AntDesign from '@expo/vector-icons/AntDesign';
import * as Font from 'expo-font';
import { getStatusBarHeight} from 'react-native-status-bar-height';

//root dari semua fungsi, tempatnya dipanggil dll
export default function App() {

  const [appIsReady, setAppIsReady] = useState(false);
  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
        // Pre-load fonts, make any API calls you need to do here

        await Font.loadAsync(AntDesign.font);
        await Font.loadAsync({
          'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
          'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
          'Montserrat-Light': require('./assets/fonts/Montserrat-Light.ttf'),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }
  return (
    
  
    <NavigationContainer> 
      <View  style = {{
        flex: 1,
        marginTop: getStatusBarHeight(),
      }} onLayout={onLayoutRootView}>
      <Tabs/>
      </View>
    </NavigationContainer>  
  );
}