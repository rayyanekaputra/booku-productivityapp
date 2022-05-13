import React, {useState, useRef, useMemo, useCallback} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard} from 'react-native';
import colors from '../../assets/colors/colors';
import { useFonts } from 'expo-font';
import { AntDesign } from '@expo/vector-icons';

AntDesign.loadFont();
export default function Editor({route}){

    const [text, setText] = useState('');
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
            
            value = {text}
            onChangeText = {(text) => setText(text)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    
});