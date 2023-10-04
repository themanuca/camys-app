import { NativeBaseProvider, Button as NativeBaseButton, VStack, Center,Heading  } from "native-base";
import { Button } from "../../components/buttons";
import { useNavigation } from "@react-navigation/native";
import { Input } from "../../components/inputs";
import { Controller, useForm } from "react-hook-form";
import {AntDesign} from "@expo/vector-icons";
import tempData from "../../data/tempData";
import { FlatList } from "react-native";
import CardLista from "../../components/cardLista";
export default function Home() {

  type StatusType = {
    status:string;
  }
  const navigation = useNavigation<any>();
  const {control, handleSubmit, formState:{errors}} = useForm<StatusType>();
  function handlerChange(data:StatusType){
    console.log(data)
  }
  return (
    <NativeBaseProvider >
     <VStack  flex={1} bg='#FFF5F5' safeArea alignItems='center'>
      <Center>
        <Heading color={'#9b2626'} margin={30} >
          Diga ao seu parceiro como você se sente.
        </Heading>
        <Controller
          control={control}
          name="status"
          rules={{
            required:'Por favor, preencha o campo.'
          }}
          render={({field:{onChange}})=>(
            <Input 
            altura={10} 
            width={300} 
            placeholder="Ex: Estou com fome" 
            onChangeText={onChange}
            errorMessage={errors.status?.message}

            />
          )}
        />
        <Button
        titulo="Compartilhar" 
        bg={'#9b2626'} 
        color='#FFF5F5' 
        onPress={handleSubmit(handlerChange)}
        />
        <VStack space={3} justifyContent="center">
          <NativeBaseButton 
          onPress={()=>{ navigation.navigate('CreateList')}}
          style={{borderWidth:2, borderColor:"blue", borderRadius:4, padding:16, backgroundColor:"transparent"}}
          >
            <AntDesign name="plus" size={16}/>
          </NativeBaseButton>
          
        </VStack>
        <FlatList 
        data={tempData} 
        keyExtractor={items=>items.nome}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item})=><CardLista list={item}/>}
        />
      </Center>
    
     </VStack>

    </NativeBaseProvider>
  );
}
