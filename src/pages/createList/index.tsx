import { KeyboardAvoidingView, NativeBaseProvider,Button as NativeBaseButton } from 'native-base'
import React from 'react'
import { StyleSheet,TouchableOpacity } from 'react-native'
import {AntDesign} from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

export default function CreateList() {
    const navigation = useNavigation<any>();

  return (
    <NativeBaseProvider>
            <KeyboardAvoidingView style={styles.container } behavior='padding'>
                <NativeBaseButton 
                style={{position:"absolute", top:44, right:32,backgroundColor:"transparent"}}
                onPress={()=>{ navigation.goBack()}}
                >
                    <AntDesign name="close" size={16}/>
                </NativeBaseButton>
            </KeyboardAvoidingView>
    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})
