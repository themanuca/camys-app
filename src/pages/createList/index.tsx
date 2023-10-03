import { KeyboardAvoidingView, NativeBaseProvider,Button as NativeBaseButton, Center, VStack } from 'native-base'
import React from 'react'
import { StyleSheet,TouchableOpacity, View, Text, TextInput } from 'react-native'
import { useState } from "react";
import {AntDesign} from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import tempData from "../../data/tempData";

export default function CreateList() {
    const navigation = useNavigation<any>();
    const [nome, setNome] = useState("");
    const estado = {
        name:""
    }
    const criarLista = () =>{
        console.log(JSON.parse(JSON.stringify(tempData)));

        tempData.push({
            nome,
            todos:[]
        });

        navigation.goBack();
    }

  return (
    <NativeBaseProvider>
        <KeyboardAvoidingView style={styles.container } behavior='padding'>
            <NativeBaseButton 
            style={{position:"absolute",top:44,right:32,backgroundColor:"transparent"}}
            onPress={()=>{ navigation.goBack()}}
            >
                <AntDesign name="close" size={26} />
            </NativeBaseButton>

            <View style={{alignSelf:"stretch", marginHorizontal:32}}>
                <Text style={styles.title}>Monte sua lista</Text>
                <TextInput 
                style={styles.input} 
                placeholder="Nome da lista"
                onChangeText={setNome}
                />
                <TouchableOpacity style={[styles.create, {backgroundColor:"#9b2626"}]} onPress={criarLista}>
                    <Text style={{color:"#FFFFFF", fontWeight:"600"}}>Criar!</Text>
                </TouchableOpacity>
            </View>

        </KeyboardAvoidingView>
    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    title:{
        fontSize:28,
        fontWeight:"800",
        color:'#9b2626',
        alignSelf:"center",
        marginBottom:16
    },
    input:{
        borderWidth:StyleSheet.hairlineWidth,
        borderColor:"#9b2626",
        borderRadius:6,
        height:50,
        marginTop:8,
        paddingHorizontal:16,
        fontSize:18
    },
    create:{
        marginTop:24,
        height:50,
        borderRadius:6,
        alignItems:"center",
        justifyContent:"center"
    }
})


