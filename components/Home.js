import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import colors from '../assets/colors/colors';
import { useFonts } from 'expo-font';
import { AntDesign } from '@expo/vector-icons';
import notesKamu from '../assets/data/notesKamuData';
import tugasKamu from '../assets/data/tugasKamuData';
AntDesign.loadFont();

export default function Home({navigation}) {
  //panggil fungsi useFonts untuk pake fonts custom dari expofonts
  const [loaded] = useFonts({
    'Montserrat-Bold': require('../assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Light': require('../assets/fonts/Montserrat-Light.ttf'),
  });
  
  if (!loaded) {
    return null;
  }

  //inimi tiap notes dalamnya Notes Kamu
  const renderNotesKamuItem = ({item}) => {
    return(
      <View style = {[ //bisa ambil dua style yang mengoverride
        styles.noteWrapper, {
          marginLeft: item.id == 1 ? 24 : 0, //jika id == 1, maka 20 else 0
        }]}>
        <Text style = {styles.textNoteJudul}>{item.judul}</Text>
        <Text  numberOfLines={3} style = {styles.textNoteIsi}>{item.isi}</Text>
      </View>
    );
  };

  return (
    
    //Pake Scrollview spy bisa discroll vertikal layarnya
    <ScrollView style={styles.container} contentInsetAdjustmentBehavior = 'automatic' showsVerticalScrollIndicator = {false}>
  {/* header */}
    <View style = {styles.headerWrapper}>
      <Text style = {styles.textUtama}>Bagaimana {'\n'}Harimu?</Text>
      <TouchableOpacity onPress = {()=>navigation.navigate('Settings')}>
        <AntDesign name="setting" size={24} color= {colors.antiHitam} />
      </TouchableOpacity>
    
    </View>

    {/* titles */}
    <View style = {styles.titlesWrapper}>
      <View style = {styles.titlesSubwrapperIsi}>
          <Text style = {styles.textSubtitle1}>Performa kamu {'\n'}minggu ini:</Text>
          <Text style = {styles.textSubtitle2}>+23.54%</Text>
        </View>
      <View style = {styles.titlesSubwrapper}>
        {/* yang bedakan text di kiri sm tombol di kanan */}
        <View style = {styles.titlesSubwrapperIsi}>
          <Text style = {styles.textSubtitle1}>Waktu belajar{'\n'}kamu minggu ini:</Text>
          <Text style = {styles.textSubtitle2}>16.4 jam</Text>
        </View>
        
        <TouchableOpacity style = {styles.buttonSmall} onPress ={()=>{
          navigation.navigate('NotesTab', {screen: 'Notes'})
        }}>
          <Text style = {styles.buttonSmallTextwithIcon}>Mulai Belajar</Text>
          <AntDesign name="clockcircleo" size={8} color='white' />
        </TouchableOpacity>
      </View>
    </View>

    {/* container summary */}
    <View style = {styles.summaryWrapper}>
      <View style = {styles.summary}>
        {/* judul sm subjudulna yang di atas  */}
        <View style = {styles.summaryTextWrapper}>
          <Text style = {styles.textSummaryJudul}> Minggu ini kamu </Text>
          <Text style = {styles.textSummaryIsi}> Cukup Produktif </Text>
        </View>
        {/*Summary-nya dan dia bisa diclick*/}
        <TouchableOpacity style = {styles.summaryStatusWrapper} onPress ={()=>{
          navigation.navigate('DatesTab', {screen: 'Dates'})
        }} >
          {/* tulisannya */}
          <View style = {styles.summaryStatusTextWrapper}>
          <Text style = {styles.summaryStatusTextJudul}> Sisa tugas minggu ini </Text>
          <Text style = {styles.summaryStatusTextIsi}> 20 tugas </Text>
          </View>
          {/* progressnya */}
          <View style = {styles.progressBar}>
            <Text style = {styles.textProgressBar}>12/15</Text>
            <AntDesign name="caretright" size={8} color= {colors.mainAccent} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.summaryStatusWrapper} onPress ={()=>{
          navigation.navigate('DatesTab', {screen: 'Dates'})
        }}>
          {/* tulisannya */}
          <View style = {styles.summaryStatusTextWrapper}>
            <Text style = {styles.summaryStatusTextJudul}> Sisa tugas minggu ini </Text>
            <Text style = {styles.summaryStatusTextIsi}> 20 tugas </Text>
          </View>
          {/* progressnya */}
          <View style = {styles.progressBar}>
            <Text style = {styles.textProgressBar}>12/15</Text>
            <AntDesign name="caretright" size={8} color= {colors.mainAccent} />
          </View>
        </TouchableOpacity>
        
      </View>
    </View>
    
    {/* Notes Kamu */}
    <View style = {styles.noteskamuWrapper}>
      <View style = {styles.noteskamuJudul}>
        <Text style = {styles.textUtama}>Notes Kamu</Text>
        <TouchableOpacity style = {styles.buttonSmall} onPress ={()=>{
          navigation.navigate('NotesTab', {screen: 'Notes'})
        }}>
          <Text style = {styles.buttonSmallTextwithIcon}>Lihat Semuanya</Text>
          <AntDesign name="caretright" size={8} color= "white" />
        </TouchableOpacity>
      </View>
      <View style = {styles.noteskamuWrapper}>
        <FlatList
          data = {notesKamu}
          renderItem = {renderNotesKamuItem}
          keyExtractor = {(item) => item.id}
          horizontal = {true}
          showsHorizontalScrollIndicator = {false}
          key = {notesKamu}
        />
      </View>
    </View>

    {/* Tugas Kamu */}
    <View style = {styles.tugaskamuWrapper}>
      <View style = {styles.tugaskamuJudul}>
        <Text style = {styles.textUtama}>Tugas Kamu</Text>
        <TouchableOpacity style = {styles.buttonSmall} onPress ={()=>{
          navigation.navigate('DatesTab', {screen: 'Dates'})
        }}>
          <Text style = {styles.buttonSmallTextwithIcon}>Lihat Semuanya</Text>
          <AntDesign name="caretright" size={8} color= "white" />
        </TouchableOpacity>
      </View>
      
      <View> 
        {tugasKamu.slice(0,3).map((item) =>(
          // per item
          //ingat ini bukan flatlist jadi nda perlu render-render
          <View style = {styles.tugasWrapper} key = {item.id}>
            <View style = {[styles.tugas, {
              marginTop: item.id == 1 ? 0:8, //8 marginnya di atas kalau bukan id == 1, krn ada ji padding dari judul
              backgroundColor: item.hariIni == true ? colors.mainAccent:colors.abuabuSubtle, 
              marginBottom: item.id == 3? 125:0
              },
              ]}>
              <Text style = {[styles.textTugasJudul, {
                color: item.hariIni == true ? 'white' :colors.antiHitam, 
              },
              ]}>Tugasmu: {item.judulTugas}</Text>
              <Text style = {[styles.textTugasIsi, {
                color: item.hariIni == true ? 'white' :colors.antiHitam, 
              },
              ]}>Tugasmu: {item.judulTugas}</Text>
            </View> 
          </View> 
        ))}
      </View>
    </View>
    </ScrollView>

      
    
   
    
  );
  
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },

    summaryWrapper: {
      backgroundColor: 'white',
      paddingHorizontal: 24,
      paddingTop: 24,
    },
    headerWrapper: {
      paddingTop: 48,
      padding: 24,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: colors.antiBackground,
    },
    titlesWrapper: {
      paddingHorizontal: 24,
      backgroundColor: colors.antiBackground,
      flexDirection: 'column'
    },
    titlesSubwrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'

    },
    titlesSubwrapperIsi: {
      flexDirection: 'column',
      paddingBottom: 20,
    },

    summary: {
      flexDirection: 'column',
      borderWidth: 1,
      borderColor: colors.abuabuSubtle,
      borderRadius: 8,
      backgroundColor: 'white',
      padding: 16,
    },
    summaryTextWrapper:{
      flexDirection: 'column',
      alignItems: 'center',
    },
    summaryStatusWrapper:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 12,
      backgroundColor: colors.antiBackground,
      borderRadius: 4,
      marginBottom: 8,
    },
    summaryStatusTextWrapper: {
      flexDirection: 'column',
      
    },
    summaryStatusTextJudul: {
      fontFamily: 'Montserrat-Light',
      fontSize: 8,
      color: colors.abuabuStrong,
      paddingBottom: 2,
    },
    summaryStatusTextIsi: {
      fontFamily: 'Montserrat-Bold',
      fontSize: 8,
      color: colors.antiHitam,
      paddingBottom: 2
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


    progressBar:{
      flexDirection: 'row',
      backgroundColor: 'white',
      paddingTop: 2, //ntah kenapa kalau ndd ini, nda ketengahki
      paddingHorizontal: 32,
      alignItems: 'center',
      borderRadius: 32,
    },
    textProgressBar: {
      fontSize: 8,
      fontFamily: 'Montserrat-Bold',
      color: colors.mainAccent
    },



    noteskamuWrapper:{ // INI KESELURUHAN NOTE
      // padding: 24, kalau dikasih padding bisa na cut carouselnya
    },
    noteskamuJudul:{
      padding: 24,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    noteWrapper:{ //INI PERSATU NOTE
      width: 145 +25, //ditambah 25 karena keknya kurang besarki
      height: 120 +25, //karena mmg mauki kasih fixki, nda responsive kek flexbox 
      padding: 8, //inikan kedalamki
      backgroundColor: colors.mainAccent,
      marginRight: 8, //pemisah antar notes
      borderRadius: 4,
    },
    textNoteJudul:{
      fontFamily: 'Montserrat-Bold',
      fontSize: 12,
      color: 'white',
    },
    textNoteIsi:{
      fontFamily: 'Montserrat-Light',
      fontSize: 8,
      color: 'white',
      textAlign: 'left',
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

    buttonSmall:{
      flexDirection: 'row',
      backgroundColor: colors.mainAccent,
      padding: 12,
      alignItems: 'center',
      justifyContent: 'space-between',
      borderRadius: 64
    },
    buttonSmallTextwithIcon:{
      color: 'white',
      fontFamily: 'Montserrat-Bold',
      fontSize: 8,
      paddingRight: 8
    },
    

    
    textUtama: {
      textAlign: 'left',
      fontFamily: 'Montserrat-Bold',
      fontSize: 28,
      color: colors.antiHitam
      
    },

    textSubtitle1: {
      textAlign: 'left',
      fontFamily: 'Montserrat-Regular',
      fontSize: 8,
      color: colors.abuabuSubtle,
      
    },
    textSubtitle2: {
      textAlign: 'left',
      fontFamily: 'Montserrat-Bold',
      fontSize: 16,
      color: colors.antiHitam,
      marginTop: 8
    }
  });