import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard} from 'react-native';
import colors from '../../assets/colors/colors';
import { useFonts } from 'expo-font';
import { AntDesign } from '@expo/vector-icons';

AntDesign.loadFont();
export default function Settings({route}){

    const [text, onChangeText] = useState("Masukkan pesan dan kesanmu");

    //panggil fungsi useFonts untuk pake fonts custom dari expofonts
    const [loaded] = useFonts({
        'Montserrat-Bold': require('../../assets/fonts/Montserrat-Bold.ttf'),
        'Montserrat-Regular': require('../../assets/fonts/Montserrat-Regular.ttf'),
        'Montserrat-Light': require('../../assets/fonts/Montserrat-Light.ttf'),
    });
    
    if (!loaded) {
        return null;
    }

    return(
        <View style = {styles.container}>
            {/* barisan backup data */}
            <View style = {styles.dalamnyaContainer}>
                <Text style = {styles.textUtama}>
                    Backup Data
                </Text>

                <TouchableOpacity style = {styles.hubungkanButton}>
                    <Text style = {styles.buttonSmallTextwithIcon}> Hubungkan Akun</Text>
                    <AntDesign name="caretright" size={8} color= "white" />
                </TouchableOpacity>
            </View>

            {/* barisan text feedbacks */}
            <View style = {[styles.dalamnyaContainer, {
                paddingTop: 24,
                borderBottomWidth: 0,
                alignItems: 'flex-start',

            }]}>
                <Text style = {styles.textUtama} >
                    Feedbacks
                </Text>
            </View>
            {/* barisan form feedbacks */}
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible = {false}>
                    <View style = {{
                        paddingHorizontal: 24,
                        flexDirection: 'column',
                        backgroundColor: 'blue'
                        }}>
                    <TextInput

                    multiline = {true}
                    style={{
                        backgroundColor: 'coral'
                    }}
                    onChangeText={onChangeText}
                    value={text}
                    />
                    </View>
                </TouchableWithoutFeedback>
               

                
        </View>

    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingVertical: 84,
    },
    dalamnyaContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 24,
        paddingBottom: 16,
        borderBottomWidth: 1,
        borderBottomColor: colors.abuabuSubtle,
    },
    textUtama: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 16,
        color: colors.antiHitam,

    },
    hubungkanButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.mainAccent,
        padding: 12,
        borderRadius: 64,
    },
    buttonSmallTextwithIcon:{
        color: 'white',
        fontFamily: 'Montserrat-Bold',
        fontSize: 8,
        paddingRight: 8
      },
});