import { View,Text,StyleSheet,TouchableOpacity } from "react-native";
import React,{ useState } from "react";

export default cardLista=({list, onPress })=>{
    const [refresh, setRefresh] = useState(false);
    
    const count = list.todos.lenght;

    return(
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.listContainer, {backgroundColor:list.cor}]}>
                <Text style={styles.listTitle} numberOfLines={1}>
                    {list.nome}
                </Text>
                <Text style={styles.listTitle} numberOfLines={1}>
                    {count}
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
    }
});