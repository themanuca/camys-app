import { View,Text,StyleSheet } from "react-native";
import React from "react";

export default cardLista=({list})=>{
    return(
        <View style={[styles.listContainer, {backgroundColor:list.cor}]}>
            <Text style={styles.listTitle} numberOfLines={1}>
                {list.nome}
            </Text>
        </View>
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
        fontSize:24,
        fontWeight:"700",
        color:'#FFF5F5',
        marginBottom:18
    }
});