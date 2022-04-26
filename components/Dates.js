import React, { useCallback, useMemo, useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView, Button} from 'react-native';
import colors from '../assets/colors/colors';
import { useFonts } from 'expo-font';
import { AntDesign } from '@expo/vector-icons';
import BottomSheet, { BottomSheetFlatList, BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import tugasKamu from '../assets/data/tugasKamuData';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

export default function Dates(){

    // hooks
    const sheetRef = useRef(null);
    const [isOpen, setIsOpen] = useState(true);

    const snapPoints = useMemo(() => ["40%","90%"], []);
    const handleSnapPress = useCallback((index) => {
        sheetRef.current?.snapToIndex(index);
        setIsOpen(true);
    }, []);
    const handleClosePress = useCallback(() => {
        sheetRef.current?.close();
    }, []);

    //inimi tiap notes dalamnya Tugas Kamu
    const renderTugasKamuItem = ({item}) => {
        return(
        <TouchableOpacity>
            <View style = {styles.tugasWrapper}>
                <View style = {[styles.tugas, {
                marginTop: item.id == 1 ? 0:8, //8 marginnya di atas kalau bukan id == 1, krn ada ji padding dari judul
                backgroundColor: item.hariIni == true ? colors.mainAccent:colors.abuabuSubtle, 
                },
                ]} >
                <Text style = {[styles.textTugasJudul, {
                    color: item.hariIni == true ? 'white' :colors.antiHitam, 
                } 
                ]}>Tugasmu: {item.judulTugas}</Text>
                <Text style = {[styles.textTugasIsi, {
                    color: item.hariIni == true ? 'white' :colors.antiHitam, 
                },
                ]}>Tugasmu: {item.judulTugas}</Text>
                </View> 
            </View> 
        </TouchableOpacity>
        
        );
    };

    return(
    <View style = {styles.container} >
        <Calendar/>
        <View style = {{
            flex: 1,
            backgroundColor: setIsOpen? 'black':'white',
        }}>
            <Text style = {{
                fontSize: 64,
                color: colors.mainAccent,
            }}>
                asdasdasd
            </Text>
        </View>
        <BottomSheet 
                style = {styles.tugasKamuWrapper}
                ref={sheetRef}
                snapPoints={snapPoints}
                onClose = {()=>setIsOpen(false)}>
                    <BottomSheetFlatList
                        data = {tugasKamu}
                        renderItem = {renderTugasKamuItem}
                        keyExtractor = {(item) => item.id}
                        contentContainerStyle={styles.contentContainer}
                        />       
        </BottomSheet>
    </View>
    
    );
};


const styles = StyleSheet.create({
    contentContainer:{
        backgroundColor: 'white',
        paddingTop: 24,
    },
    container: {
        flex: 1,
        alignContent: 'center',
    },
    tugaskamuWrapper:{ // INI KESELURUHAN TUGAS
        // padding: 24, kalau dikasih padding bisa na cut carouselnya
    },
    tugaskamuJudul:{
        padding: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    tugasWrapper:{
        paddingHorizontal: 24,
    },
    tugas:{ //INI PERSATU NOTE
        padding: 8, //inikan kedalamki
        marginBottom: 8, //pemisah antar notes
        borderRadius: 4,
    },
    textTugasJudul:{
        fontFamily: 'Montserrat-Bold',
        fontSize: 12,
        textAlign: 'left',
        marginBottom: 2,
    },
    textTugasIsi:{
        fontFamily: 'Montserrat-Light',
        fontSize: 8,
        textAlign: 'left',
    },
})