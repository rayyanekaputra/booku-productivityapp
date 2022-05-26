import React, { useCallback, useMemo, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import colors from '../assets/colors/colors';
import { useFonts } from 'expo-font';
import { AntDesign } from '@expo/vector-icons';
import notesKamu from '../assets/data/notesKamuData';
import CountDown from 'react-native-countdown-component';

AntDesign.loadFont();
export default function Notes({navigation}){
  
    //ini state2 yang terganti pada saat menggunakan timer

    const [countIDBelajar, setCountIDBelajar] = useState('z');
    const [isTimerRunningBelajar, setTimerRunningBelajar]= useState(false);
    const [isPressedChangeTextBelajar, setPressedChangeTextBelajar] = useState('Mulai');
    const [isCountUntillBelajar, setCountUntillBelajar] = useState(10);

    const [countIDIstirahat, setCountIDIstirahat] = useState('a');
    const [isTimerRunningIstirahat, setTimerRunningIstirahat]= useState(false);
    const [isPressedChangeTextIstirahat, setPressedChangeTextIstirahat] = useState('Mulai');
    const [isCountUntillIstirahat, setCountUntillIstirahat] = useState(2);

  

  
    
   
  
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

                  {/* TOMBOL RESET */}
                    <Text style = {styles.subtextUtamaDalam} >
                        Dengan metode pomodoro
                    </Text>
                    <TouchableOpacity style = {styles.buttonInside} onPress = {()=>{
                      setCountIDBelajar('asdf'),
                      setTimerRunningBelajar(false),
                      setPressedChangeTextBelajar('Mulai'),
                      setCountIDIstirahat('nbmb'),
                      setTimerRunningIstirahat(false),
                      setPressedChangeTextIstirahat('Mulai')
                      


                    }}>
                        <Text style = {styles.textButtonInside}>Reset Timer</Text>
                    </TouchableOpacity>
                                
                            

                    
                </View>
                {/*countdown utama*/}
                <View style = {styles.countdownWrapper}>
                <CountDown
                  id = {countIDBelajar}
                  size={15}
                  until={isCountUntillBelajar}
                  onFinish={() => (alert('Finished'),setCountIDBelajar('xcvx'))}
                  
                  digitStyle = {{
                    backgroundColor: colors.antiBackground,
                    height:24,
                    width: 24,
                   
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  digitTxtStyle = {{
                    color: colors.antiHitam,
                    fontFamily: 'Montserrat-Bold',
                    fontWeight: 'normal'
                  }}
                  
                  timeToShow={['M', 'S']}
                  timeLabels={{m: null, s: null}}
                  running = {isTimerRunningBelajar}
                  showSeparator
                />
                    <TouchableOpacity style = {[styles.buttonInside,{
                      backgroundColor: isTimerRunningBelajar? 'white':colors.mainAccent,
                      borderWidth: isTimerRunningBelajar? 1:0,
                      borderColor: isTimerRunningBelajar? colors.mainAccent: 'white'
                    }]} onPress = {()=> {
                      setTimerRunningBelajar(true),
                      setPressedChangeTextBelajar('Pause')
                      
                    }}>
                        <Text style = {[styles.textButtonInside, {
                          color: isTimerRunningBelajar? colors.mainAccent:'white',
                        }]}>{isPressedChangeTextBelajar}</Text>
                    </TouchableOpacity>
                </View>
                {/*countdown istirahat*/}
                <View style = {[styles.countdownWrapper, {
                    marginBottom: 24,
                }]}>
                    <CountDown
                    id = {countIDIstirahat}
                  size={15}
                  until={isCountUntillIstirahat}
                  onFinish={() => (alert('Finished'), setCountIDIstirahat('nbvfsf'))}
                  digitStyle = {{
                    backgroundColor: colors.antiBackground,
                    height:24,
                    width: 24,
                   
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  digitTxtStyle = {{
                    color: colors.antiHitam,
                    fontFamily: 'Montserrat-Bold',
                    fontWeight: 'normal'
                  }}
                  
                  timeToShow={['M', 'S']}
                  timeLabels={{m: null, s: null}}
                  running = {isTimerRunningIstirahat}
                  showSeparator
                />
                    <TouchableOpacity style = {[styles.buttonInside,{
                      backgroundColor: isTimerRunningIstirahat? 'white':colors.mainAccent,
                      borderWidth: isTimerRunningIstirahat? 1:0,
                      borderColor: isTimerRunningIstirahat? colors.mainAccent: 'white'
                    }]} onPress = {()=> {
                      setTimerRunningIstirahat(true),
                      setPressedChangeTextIstirahat('Pause')
                      
                    }}>
                        <Text style = {[styles.textButtonInside, {
                          color: isTimerRunningIstirahat? colors.mainAccent:'white',
                        }]}>{isPressedChangeTextIstirahat}</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View> 
        {notesKamu.map((item) =>(
          // per item
          //ingat ini bukan flatlist jadi nda perlu render-render
          <View style = {[styles.notesWrapper, {
            marginBottom: item.id == (notesKamu.length)? 125:0 //di sini massuku, moka cek apa diakhirmi itemnya
          }]} key = {item.id}>
            <View style = {styles.note}>
              <Text style = {[styles.textUtamaDalam, {
                  color: 'white',
                  lineHeight: 20,
              }]}>{item.judul}</Text>
              <Text  numberOfLines={3} style = {[styles.subtextUtamaDalam, {
                  color: 'white',
                  lineHeight: 20,
              }]}>{item.isi}</Text>
            </View> 
          </View> 
        ))}
      </View>

         </ScrollView>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        
    },
    headerWrapper: {
        padding: 24,
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

      textUtamaDalam:{
        fontFamily: 'Montserrat-Bold',
        fontSize: 16,
        textAlign: 'left',
        marginBottom: 2,
        color: colors.antiHitam,
    },
      subtextUtamaDalam: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
        textAlign: 'left',
        color: colors.antiHitam,

      },
      

      focusCall: {
        marginHorizontal: 24,
        backgroundColor: colors.antiBackground,
      },

      timerPomodoro: {
        marginTop: 24,
        marginHorizontal: 24,
        borderWidth: 1,
        borderColor: colors.abuabuSubtle,
        borderRadius: 8,
      },

      buttonInside:{
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingVertical: 8,
        paddingHorizontal: 24,
        alignItems: 'center',
        borderRadius: 32,
        backgroundColor: colors.mainAccent,
      },
      textButtonInside: {
        fontSize: 8,
        fontFamily: 'Montserrat-Bold',
        color: 'white'
        
      },
      countdownWrapper:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        paddingVertical: 16,
        marginHorizontal: 24,
        backgroundColor: colors.antiBackground,
        borderRadius: 8,
        marginBottom: 12,
      },
      textSummaryJudul:{
        fontFamily: 'Montserrat-Bold',
        fontSize: 8,
        color: colors.antiHitam,
        paddingBottom: 2,
      },
      textSummaryIsi:{
        fontFamily: 'Montserrat-Bold',
        fontSize: 16,
        color: colors.antiHitam,
        paddingBottom: 8,
      },

      notesWrapper: {
        paddingHorizontal: 24,
        
        
      },
      note: {
          backgroundColor: colors.mainAccent,
          padding: 24,
          marginVertical: 8,
          borderRadius: 8,

      },

});