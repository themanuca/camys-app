import { KeyboardAvoidingView, NativeBaseProvider,Button as NativeBaseButton, Center, VStack } from 'native-base'
import React from 'react'
import { StyleSheet,TouchableOpacity, View, Text, TextInput } from 'react-native'
import { useState } from "react";
import {AntDesign} from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import tempData from "../../data/tempData";
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function CreateList() {

    const backGround = [
        "#9b2626",
        "#5CD859",
        "#424A6D",
        "#595BD9",
        "#D159D8",
        "#D85963",
        "#D88559"
      ];
    const navigation = useNavigation<any>();
    const [nome, setNome] = useState("");
    const [cor, setCor] = useState(backGround[0]);

    const render = ()=>{
        return backGround.map(color=>{
            return(
                <TouchableOpacity
                    key={color}
                    style={[styles.colorSelect, {backgroundColor:color}]}
                    onPress={()=>setCor(color)}
                />
            )
        })
    }
    const criarLista = async() =>{
       
        const response = await AsyncStorage.getItem('@newcard');
        const responseData = ( response? JSON.parse(response):[]);
        tempData.unshift(responseData)
        
        tempData.unshift({
            nome,
            cor,
            todos:[]
        });
        const data = [...tempData]

        const jsonValue = JSON.stringify(data);
        await AsyncStorage.setItem('@newcard', jsonValue);
              

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
                <View style={{flexDirection:"row", justifyContent:"space-between", marginTop:12}}>{render()}</View>
                <TouchableOpacity style={[styles.create, {backgroundColor:cor}]} onPress={criarLista}>
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
    },
    colorSelect:{
        width:30,
        height:30,
        borderRadius:4
    }
})


