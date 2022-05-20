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
<<<<<<< Updated upstream
        <View style = {styles.container}>
            <Text style = {styles.text}>
                notess mauko mencatat
            </Text>
        </View>
=======
         <ScrollView style={styles.container} contentInsetAdjustmentBehavior = 'automatic' showsVerticalScrollIndicator = {false}>
             {/* header */}
            <View style = {styles.headerWrapper}>
                <Text style = {styles.textUtama}>Notes</Text>
                <TouchableOpacity onPress ={()=>{
          navigation.navigate('Editor')
        }}>
                <AntDesign name="plus" size={24} color= {colors.antiHitam} />
                </TouchableOpacity>
            </View>

            {/*pengingat takut lupa  */}
            <TouchableOpacity style = {styles.focusCall} onPress ={()=>{
          navigation.navigate('DatesTab', {screen: 'Dates'})
        }}>
                {/* barisan pertama */}
                <View style = {{
                    paddingHorizontal: 24,
                    paddingTop: 24,
                    paddingBottom: 8,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <Text style = {styles.textUtamaDalam} >
                        Takut Lupa?
                    </Text>
                    <AntDesign name="caretright" size={16} color= {colors.antiHitam} />
                </View>
                {/* barisan kedua */}
                <View style = {{
                    paddingHorizontal: 24,
                    paddingBottom: 24,
                }}>
                    <Text style = {styles.subtextUtamaDalam} >
                    Jangan lupa set reminder tugas-tugas kamu agar semua tetap on-track!
                    </Text>
                    
                </View>
                
            </TouchableOpacity>
            {/* timer pomodoro */}
            <View style = {[styles.timerPomodoro, {
                marginBottom: 16,
            }]}>
                {/* barisan pertama */}
                <View style = {{
                    paddingHorizontal: 24,
                    paddingTop: 24,
                }}>
                    <Text style = {styles.textUtamaDalam} >
                        Mulai Belajar
                    </Text>

                </View>
                {/* barisan kedua */}
                <View style = {{
                    paddingHorizontal: 24,
                    paddingBottom: 24,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <Text style = {styles.subtextUtamaDalam} >
                        Dengan metode pomodoro
                    </Text>
                    <TouchableOpacity style = {styles.buttonInside} onPress={() => 
                      }>
                        <Text style = {styles.textButtonInside}>Reset Timer</Text>
                    </TouchableOpacity>
                                
                            
>>>>>>> Stashed changes

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