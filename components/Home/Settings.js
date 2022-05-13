import React, {useState, useRef, useMemo, useCallback} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard} from 'react-native';
import colors from '../../assets/colors/colors';
import { useFonts } from 'expo-font';
import { AntDesign } from '@expo/vector-icons';
import {
    BottomSheetModal,
    BottomSheetModalProvider,
    BottomSheetBackdrop,
  } from '@gorhom/bottom-sheet';

AntDesign.loadFont();
export default function Settings({route}){

    const renderBackdrop = useCallback(
        props => (
          <BottomSheetBackdrop
            {...props}
            disappearsOnIndex={1}
            appearsOnIndex={2}
            enableTouchThrough = {false}
            style = {{
                backgroundColor: 'black',
                color: 'black'
            }}
          />
        ),
        []
      );

    // ref
  const bottomSheetModalRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  // variables
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
    setIsOpen(true);
    
  }, []);
  const handleCloseModalPress = useCallback(() => {
    bottomSheetModalRef.current?.close();
    
}, []);
  
  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index);
    
  }, []);
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
        <BottomSheetModalProvider>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible = {false}>
           {/* view parent semuanya */}
            <View style = {[styles.container,{
                backgroundColor: isOpen? colors.abuabuStrong : 'white'
            }]}>
                {/* barisan backup data */}
                <View style = {styles.dalamnyaContainer}>
                    <Text style = {styles.textUtama}>
                        Backup Data
                    </Text>

                    <TouchableOpacity style = {[styles.hubungkanButton,{
                backgroundColor: isOpen? '#888686' : colors.mainAccent
            }]}>
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
                <View style = {{
                    paddingHorizontal: 24,
                    flexDirection: 'column',
                    
                    }}>
                <TextInput

                multiline = {true}
                style={{
                    backgroundColor: 'white',
                    fontFamily: 'Montserrat-Regular',
                    color: colors.antiHitam,
                    fontSize: 12,
                    padding: 16,
                    borderWidth: 1,
                    borderColor: colors.abuabuSubtle,
                    borderRadius: 8,
                }}
                onChangeText={onChangeText}
                value={text}
                />
                </View>

                {/* Tombol Submit */}
                <View style = {{
                    paddingHorizontal: 24,
                    paddingTop: 20,
                }}>
                    <TouchableOpacity style = {styles.submitButton} onPress = {handlePresentModalPress}>
                        <Text style = {[styles.buttonSmallTextwithIcon, {
                            fontSize: 16,
                            paddingHorizontal: 0,
                        }]}>
                            Submit
                        </Text>
                    </TouchableOpacity>
                    <BottomSheetModal
                        ref={bottomSheetModalRef}
                        index={1}
                        snapPoints={snapPoints}
                        onChange={handleSheetChanges}
                        backdropComponent={renderBackdrop}
                        onDismiss = {()=> setIsOpen(false)}
                        
                        >
                        <View style={styles.contentContainer}>
                            <Text style = {styles.textUtamaModal}>Saran dan kritik kamu sudah terkirim!</Text>
                            <Text style = {styles.textSubModal}>Saran kamu sangat berarti buat kami untuk kemajuan dan pengembangan Booku kedepan nantinya!</Text>
                            <TouchableOpacity style = {styles.submitButton} onPress = {handleCloseModalPress}>
                        <Text style = {[styles.buttonSmallTextwithIcon, {
                            fontSize: 16,
                            paddingHorizontal: 0,
                        }]}>
                            Okay
                        </Text>
                    </TouchableOpacity>
                        
                        </View>
                       
                    </BottomSheetModal>

                </View>
            </View>
        </TouchableWithoutFeedback>
        </BottomSheetModalProvider>
    );
}

const styles = StyleSheet.create({
    contentContainer:{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        padding: 24,
        justifyContent: 'flex-start',
    },
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
    submitButton: {
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.mainAccent,
        padding: 12,
        borderRadius: 64,
    },
    textUtamaModal: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 20,
        color: colors.antiHitam,
        paddingBottom: 12,
    },
    textSubModal: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
        color: colors.antiHitam,
        paddingBottom: 12,
    },
});