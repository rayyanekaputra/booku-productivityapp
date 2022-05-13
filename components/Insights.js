import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import colors from '../assets/colors/colors';
import { useFonts } from 'expo-font';
import { AntDesign } from '@expo/vector-icons';
import notesKamu from '../assets/data/notesKamuData';
import tugasKamu from '../assets/data/tugasKamuData';
import {
    LineChart,
  } from "react-native-chart-kit";

import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;

AntDesign.loadFont();
export default function Insights(){
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
        <ScrollView style = {styles.container} contentInsetAdjustmentBehavior = 'automatic' showsVerticalScrollIndicator = {false}>
            {/* header */}
            <View style = {styles.headerWrapper}>
                <Text style = {styles.textUtama}>Insights</Text>
                <TouchableOpacity>
                    <AntDesign name="infocirlce" size={24} color= {colors.antiHitam} />
                </TouchableOpacity>
            </View>
            <View style = {{
                flex:1,
                justifyContent: 'center',
                alignItems: 'center',
                paddingBottom: 24,
            }}>
                <View style = {{
                    backgroundColor: colors.mainAccent,
                    paddingHorizontal: 24,
                    paddingVertical: 12,
                    borderRadius: 24,
                }}>
                    <Text style = {{
                        fontFamily: 'Montserrat-Bold',
                        fontSize: 16,
                        color: 'white',
                    }}>Mingguan</Text>
                </View>
                
            </View>
            <LineChart
            data={{
                labels: ["Min", "Sen", "Sel", "Rab", "Kami", "Jum", "Sab"],
                datasets: [
                {
                    data: [1, 5, 10, 12, 15, 20, 30],
                    color: (opacity = 1) => colors.mainAccent, // optional
                    strokeWidth: 2, // optional
                }
                ],
            }}
            width={screenWidth} 
            height={240}
            chartConfig={{
                backgroundColor: 'white',
                backgroundGradientFrom: 'white',
                backgroundGradientTo: 'white',
                fillShadowGradientFrom: 'blue',
                fillShadowGradientTo: colors.antiBackground,
                decimalPlaces: 0, // optional, defaults to 2dp
                color: (opacity = 1) => colors.mainAccent,
                labelColor: (opacity = 1) => colors.mainAccent,
                
                propsForDots: {
                    r: "6",
                    strokeWidth: "2",
                    stroke: "white"
                  },
                      
              
                
            }}
            style = {{
                borderRadius: 16, 
                alignItems: 'center',
            }}
            xLabelsOffset   = {8}
            yLabelsOffset   = {24}
            />
            
            {/* wrapper detailsnya */}
            <View style = {{
               flex: 1,
               flexDirection: 'row',
               alignItems: 'center',
               marginHorizontal: 24,
               marginBottom: 124,
               marginTop: 24,
               padding: 24,
               borderWidth: 1,
               borderRadius: 8,
               borderColor: colors.abuabuSubtle,

            }}>
                {/* kolom kiri */}
                <View style = {{
                    flex: 1,
                    flexDirection: 'column',
                }}>
                    {/* satu keluarga text */}
                    <View style = {styles.satuKeluargaTextDetail}>
                        <Text style = {styles.textDetailJudul}>Tugas dalam {'\n'}seminggu</Text>
                        <Text style = {styles.textDetailIsi}>8 Tugas</Text>
                    </View>
                    {/* satu keluarga text */}
                    <View style = {styles.satuKeluargaTextDetail}>
                        <Text style = {styles.textDetailJudul}>Yang terselesaikan {'\n'}dalam seminggu</Text>
                        <View style = {styles.textDetailIsidanRasio}>
                            <Text style = {styles.textDetailIsi}>7 Tugas</Text>
                            <Text style = {styles.textDetailIsiRasio}>(-10%)</Text>
                        </View>
                        
                    </View>
                    {/* satu keluarga text */}
                    <View style = {styles.satuKeluargaTextDetail}>
                        <Text style = {styles.textDetailJudul}>Catatan dalam {'\n'}seminggu</Text>
                        <View style = {styles.textDetailIsidanRasio}>
                            <Text style = {styles.textDetailIsi}>25 Catatan</Text>
                            <Text style = {styles.textDetailIsiRasio}>(-10%)</Text>
                        </View>
                    </View>
                    {/* satu keluarga text */}
                    <View style = {styles.satuKeluargaTextDetail}>
                        <Text style = {styles.textDetailJudul}>Waktu yang kamu {'\n'}gunakan untuk belajar {'\n'}dalam seminggu</Text>
                        <View style = {styles.textDetailIsidanRasio}>
                            <Text style = {styles.textDetailIsi}>7 Tugas</Text>
                            <Text style = {styles.textDetailIsiRasio}>(-10%)</Text>
                        </View>
                    </View>
                    {/* satu keluarga text */}
                    <View style = {styles.satuKeluargaTextDetail}>
                        <Text style = {styles.textDetailJudul}>Peforma kamu {'\n'}seminggu</Text>
                        <View style = {styles.textDetailIsidanRasio}>
                            <Text style = {styles.textDetailIsi}>7 Tugas</Text>
                            <Text style = {styles.textDetailIsiRasio}>(-10%)</Text>
                        </View>
                    </View>
                    
                    
                    
                    
                    
                </View>

                {/* kolom kanan */}
                <View style = {{
                    flex: 1,
                    flexDirection: 'column',
                }}>
                    {/* satu keluarga text */}
                    <View style = {styles.satuKeluargaTextDetail}>
                        <Text style = {styles.textDetailJudul}>Tugas dalam {'\n'}sehari</Text>
                        <Text style = {styles.textDetailIsi}>8 Tugas</Text>
                    </View>
                    {/* satu keluarga text */}
                    <View style = {styles.satuKeluargaTextDetail}>
                        <Text style = {styles.textDetailJudul}>Yang terselesaikan {'\n'}dalam sehari</Text>
                        <View style = {styles.textDetailIsidanRasio}>
                            <Text style = {styles.textDetailIsi}>7 Tugas</Text>
                            <Text style = {styles.textDetailIsiRasio}>(-10%)</Text>
                        </View>
                        
                    </View>
                    {/* satu keluarga text */}
                    <View style = {styles.satuKeluargaTextDetail}>
                        <Text style = {styles.textDetailJudul}>Catatan dalam {'\n'}sehari</Text>
                        <View style = {styles.textDetailIsidanRasio}>
                            <Text style = {styles.textDetailIsi}>25 Catatan</Text>
                            <Text style = {styles.textDetailIsiRasio}>(-10%)</Text>
                        </View>
                    </View>
                    {/* satu keluarga text */}
                    <View style = {styles.satuKeluargaTextDetail}>
                        <Text style = {styles.textDetailJudul}>Waktu yang kamu {'\n'}gunakan untuk belajar {'\n'}dalam sehari</Text>
                        <View style = {styles.textDetailIsidanRasio}>
                            <Text style = {styles.textDetailIsi}>7 Tugas</Text>
                            <Text style = {styles.textDetailIsiRasio}>(-10%)</Text>
                        </View>
                    </View>
                    {/* satu keluarga text */}
                    <View style = {styles.satuKeluargaTextDetail}>
                        <Text style = {styles.textDetailJudul}>Peforma kamu {'\n'}sehari</Text>
                        <View style = {styles.textDetailIsidanRasio}>
                            <Text style = {styles.textDetailIsi}>7 Tugas</Text>
                            <Text style = {styles.textDetailIsiRasio}>(-10%)</Text>
                        </View>
                    </View>
                    
                    
                    
                    
                    
                </View>
                
                
                
            </View>
        </ScrollView>

    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        
    },
    headerWrapper: {
        paddingTop: 24,
        paddingBottom: 24,
        paddingHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

      },
      textUtama: {
        textAlign: 'left',
        fontFamily: 'Montserrat-Bold',
        fontSize: 28,
        color: colors.antiHitam,
      },

      textDetailJudul: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
        lineHeight: 16,
        color: colors.abuabuSubtle,
        paddingBottom: 8,
    },
    textDetailIsi:{
        fontFamily: 'Montserrat-Bold',
        fontSize: 12,
        lineHeight: 16,
        color: colors.antiHitam,
    },
    textDetailIsidanRasio: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'baseline'
    },
    textDetailIsiRasio: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
        color: colors.mainAccent,
        paddingLeft: 8,
    },
    satuKeluargaTextDetail: {
        paddingBottom: 16,
    },
});