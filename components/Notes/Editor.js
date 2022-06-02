import React, {useState, useRef, useMemo, useCallback} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard} from 'react-native';
import colors from '../../assets/colors/colors';
import { useFonts } from 'expo-font';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

AntDesign.loadFont();
export default function Editor({route}){

    const [notes, setNotes] = useState('');

    //ini merecord perubahan yang di textfield
    const handleOnChangeText = text => {setNotes(text)};

    // ini untuk menyimpan isi ntoes
    const handleSimpanNotes = async () =>{
        const isiNotes = {notes: notes}
        await AsyncStorage.setItem('isiNotes', JSON.stringify(isiNotes))
    }

    // const handleSimpanNotes = () =>{
        
    // }
    
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
            
            value = {notes}
            onChangeText = {(text)=> handleOnChangeText(text)}
            placeholder = {'mulailah mencatat'}
            />

            {notes.trim().length >= 1 ? ( <TouchableOpacity style = {{
                backgroundColor: colors.mainAccent,
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: 136,
                paddingVertical: 12,
                borderRadius: 32,

            }} onPress={handleSimpanNotes}>
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