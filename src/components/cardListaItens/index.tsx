import React, { useState,useCallback, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
  RefreshControl,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {tempData} from '../../data/tempData';
import { KeyboardAvoidingView, NativeBaseProvider,Button as NativeBaseButton, Container, VStack } from 'native-base'
import { useFocusEffect,useNavigation, useRoute } from '@react-navigation/native';
import {AntDesign} from "@expo/vector-icons";
import { StyleSheet} from 'react-native'


interface Task {
  id: string;
  text: string;
  done: boolean;
}

const CardListaItens: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskText, setTaskText] = useState<string>('');
  const [refresh, setRefresh] = useState(false);
  const navigation = useNavigation<any>();
  const route = useRoute();
  const {nomeLista, idCard, todosLista} = route.params;
  const [data, setData] = useState<typeof tempData>([])


  function generateUniqueId() {
    return '_' + Math.random().toString(36).substr(2, 9);
  }
  const atualizaTempData = async ()=>{
    const itemTemp = tempData.find(item=>item.id === idCard);
    if(itemTemp){
      console.log((JSON.stringify(itemTemp))+ "aqui")
      for (let i = 0; i < tempData.length; i++) {
        console.log(tempData.length + " "+ tasks.length)
        for (let j = 0; j < tasks.length; j++) {
          if(tempData[i].id === idCard){
            tempData[i].todos = tasks
            console.log(tempData[i].todos)   
          }
        }
      }
      const data = [...tempData]
      const jsonValue = JSON.stringify(data);
      await AsyncStorage.setItem('@newcard', jsonValue);
    }else{
      return
    }
  }

  async function getListData() {
    const response = await AsyncStorage.getItem('@newcard');
    const responseData = ( response? JSON.parse(response):[]);
    
  }
  
  useEffect( () => {
     getListData();
  }, []);
  

  const addTask = () => {
    if (taskText.trim() === '') return;
    const newTask: Task = {
      id: generateUniqueId(),
      text: taskText,
      done: false,
    };
    

    setTasks([...tasks, newTask]);
    
    setTaskText('');
  };
  useEffect(() => {
    console.log("AI MDS")
    atualizaTempData();
  }, [tasks]);
  
  const toggleTask = (taskId: string) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, done: !task.done } : task
    );
    setTasks(updatedTasks);
    atualizaTempData();
  };

  const removeTask = (taskId: string) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };
  const removeCard = () => {
    setRefresh(true)
    setTimeout(async ()=>{
        setRefresh(false)

        for (let i = 0; i < tempData.length; i++) {
            if (tempData[i].id === idCard) {
              tempData.splice(i, 1); // Remove o item na posição 'i'
              break; // Sai do loop após remover o item
            }
        }
          
        const data = [...tempData]
        const jsonValue = JSON.stringify(data);
        await AsyncStorage.setItem('@newcard', jsonValue);
        navigation.goBack()

  },4000)

};
  return (
    <NativeBaseProvider>
      <ScrollView contentContainerStyle={{flex:1,width: '100%'}} horizontal={true} refreshControl={<RefreshControl refreshing={refresh}/>}>
      <KeyboardAvoidingView style={styles.container } behavior='padding'>
          <Container >
            <NativeBaseButton 
            style={{justifyContent:"flex-start", position:"absolute",top:44,right:2,backgroundColor:"transparent"}}
            onPress={()=>{ navigation.goBack()}}
            >
                <AntDesign name="close" size={26} />
            </NativeBaseButton>

            <NativeBaseButton 
            style={{justifyContent:"flex-end",top:44,right:2,backgroundColor:"transparent"}}
            onPress={()=>removeCard()}
            >
                <AntDesign name="delete" size={26} />
            </NativeBaseButton>
          </Container>
      <View style={{ flex: 1, padding:16, marginTop:80 }}>
        <Text style={{ fontSize: 24,fontWeight:"800", color:'#9b2626',marginBottom: 16 }}>{nomeLista}</Text>
        <View style={{ flexDirection: 'row' }}>
          <TextInput
            style={{
              flex: 1,
              marginRight: 8,
              padding: 8,
              borderColor: '#9b2626',
              borderWidth: 1,
              borderRadius:6,
              height:50,
              paddingHorizontal:16,
              fontSize:18,
            }}
            placeholder="Adicione uma tarefa"
            value={taskText}
            onChangeText={(text) => setTaskText(text)}
          />
          <TouchableOpacity
            style={{
              backgroundColor: 'blue',
              padding: 8,
              borderRadius: 4,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={addTask}
          >
            <Text style={{ color: 'white' }}>Adicionar</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          style={{ marginTop: 16 }}
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <TouchableOpacity
                onPress={() => toggleTask(item.id)}
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 4,
                  borderWidth: 1,
                  borderColor: 'gray',
                  marginRight: 8,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {item.done && (
                  <View
                    style={{
                      width: 12,
                      height: 12,
                      backgroundColor: 'blue',
                      borderRadius: 2,
                    }}
                  />
                )}
              </TouchableOpacity>
              <Text
                style={{
                  flex: 1,
                  fontSize: 18,
                  marginLeft: 8,
                  textDecorationLine: item.done ? 'line-through' : 'none',
                }}
              >
                {item.text}
              </Text>
              <TouchableOpacity onPress={() => removeTask(item.id)}>
                <Text style={{ color: 'red', fontSize: 18 }}>Remover</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
      </KeyboardAvoidingView>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default CardListaItens;
const styles = StyleSheet.create({
  container:{
      flex:1,
      alignItems:"stretch",
  }})