import React, {useState, useRef, useMemo, useCallback} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard} from 'react-native';
import colors from '../../assets/colors/colors';
import { useFonts } from 'expo-font';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

AntDesign.loadFont();
export default function Editor({route}){

    const [catatan, setCatatan] = useState('');
    const handleOnChangeText = text => {setCatatan(text)};
    const handleSimpan = async() => {
        const isiCatatan = {catatan: catatan}
        await AsyncStorage.setItem('isiCatatan', JSON.stringify(isiCatatan))
    }
    console.log(catatan)
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
        <View style = {{
            flex: 1,
            backgroundColor: colors.antiBackground,
            padding: 24,
            paddingTop: 64,
        }}>
            <TextInput
            multiline = {true}
            style={{
    
                fontFamily: 'Montserrat-Regular',
                color: colors.antiHitam,
                fontSize: 16,

            }}
            
            value = {catatan}
            onChangeText = {handleOnChangeText}
            placeholder = {'mulailah mencatat'}
            />

            {catatan.trim().length >= 1 ? ( <TouchableOpacity style = {{
                backgroundColor: colors.mainAccent,
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: 136,
                paddingVertical: 12,
                borderRadius: 32,

            }} onPress={handleSimpan}>
                <Text style = {{
                    fontFamily: 'Montserrat-Bold',
                    color: 'white',
                }}>
                Simpan
                </Text>
            </TouchableOpacity>):null}
        </View>
    );
}

const styles = StyleSheet.create({
    
});