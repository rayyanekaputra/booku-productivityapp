import React, { useCallback, useMemo, useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../assets/colors/colors';
import { AntDesign } from '@expo/vector-icons';
import BottomSheet, { BottomSheetFlatList} from "@gorhom/bottom-sheet";
import tugasKamu from '../assets/data/tugasKamuData';
import {CalendarList} from 'react-native-calendars';


AntDesign.loadFont();
export default function Dates(){
    // hooks
    const sheetRef = useRef(null);
    const [isOpen, setIsOpen] = useState(true);

    const snapPoints = useMemo(() => ["40%","85%"], []);
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
    <View style = {styles.container}>
        {/* header */}
        <View style = {styles.headerWrapper}>
        <Text style = {styles.textUtama}>Deadlines</Text>
        <TouchableOpacity>
            <AntDesign name="infocirlce" size={24} color= {colors.antiHitam} />
        </TouchableOpacity>
        
        </View>

        {/* JANGAN LUPA RESTART SETELAH GANTI THEMENYA, NTAH KENAPA NDA NA LOAD KI PACKAGENYA */}
        <CalendarList 
        style = {styles.calendar} 
        horizontal = {true}
        pagingEnabled={true}
        pastScrollRange={2}
        // Max amount of months allowed to scroll to the future. Default = 50
        futureScrollRange={3}
        // Enable or disable scrolling of calendar list
        
        theme = {{
            calendarBackground: colors.antiBackground,

            textMonthFontSize: 24,
            textMonthFontFamily: 'Montserrat-Bold',
            
            textDayFontFamily: 'Montserrat-Regular',
            textWeekFontFamily: 'Montserrat-Bold',
           

        }}/>
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
    calendar: {
        paddingBottom: 256,
    },


    headerWrapper: {
        paddingTop: 48,
        padding: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.antiBackground,
      },
      textUtama: {
        textAlign: 'left',
        fontFamily: 'Montserrat-Bold',
        fontSize: 28,
        color: colors.antiHitam
        
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