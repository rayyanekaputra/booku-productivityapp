import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import colors from '../assets/colors/colors';
import { useFonts } from 'expo-font';
import { AntDesign } from '@expo/vector-icons';
import notesKamu from '../assets/data/notesKamuData';
import tugasKamu from '../assets/data/tugasKamuData';

AntDesign.loadFont();
export default function Notes(){
    //panggil fungsi useFonts untuk pake fonts custom dari expofonts
    const [loaded] = useFonts({
        'Montserrat-Bold': require('../assets/fonts/Montserrat-Bold.ttf'),
        'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
        'Montserrat-Light': require('../assets/fonts/Montserrat-Light.ttf'),
    });
    
    if (!loaded) {
        return null;
    }
    return(
        <View style = {styles.container}>
            <Text style = {styles.text}>
                notess mauko mencatat
            </Text>
        </View>

    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 40,
        color: colors.antiHitam,

    },
});