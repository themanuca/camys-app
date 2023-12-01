import { View,Text,StyleSheet,TouchableOpacity } from "react-native";
import React,{ useState,useCallback } from "react";
import { Button as NativeBaseButton } from 'native-base'
import {AntDesign} from "@expo/vector-icons";
import { tempData } from "../../data/tempData";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

export default cardLista=({list, onPress })=>{
    const [refresh, setRefresh] = useState(false);
    const [count, setCount] = useState(0);
    function teste(){

        for(let i=0; i<list.todos.length;i++){
            console.log(list.todos)

            if(list.todos[i].done === true){
                console.log(count)
                setCount(count+1)
                console.log("AII")
            }
        }
    }


    useFocusEffect(useCallback(()=>{
        teste();
      },[]))
    
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.listContainer, {backgroundColor:list.cor}]}>
                <Text style={styles.listTitle} numberOfLines={1}>
                   Lista {list.nome}
                    
                </Text>
                <NativeBaseButton 
            style={{position:"absolute",top:44,right:32,backgroundColor:"transparent"}}
            onPress={()=>teste()}
            >
                <AntDesign name="close" size={26} />
            </NativeBaseButton>

            <Text style={styles.listTitle} numberOfLines={2}>
                Total de Itens: {list.todos.length}
            </Text>

            <Text style={styles.listTitle} numberOfLines={2}>
                Itens verificados: {count}
            </Text>

            </View>
        </TouchableOpacity>
    );
};

const styles=StyleSheet.create({
    listContainer:{
        paddingVertical:32,
        paddingHorizontal:16,
        borderRadius:10,
        marginHorizontal:12,
        alignItems:"center",
        width:200,
        marginTop:20,
        height:'80%'
    },
    listTitle:{
        fontWeight:"700",
        fontSize:18,
        color:'#FFF5F5',
        marginBottom:18
    },

    listItens:{
        fontWeight:"700",
        fontSize:15,
        color:'#FFF5F5',
    }
});