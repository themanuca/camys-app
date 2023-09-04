import { NativeBaseProvider, Box, Text, VStack, Center,Heading, HStack } from "native-base";
import { Button } from "../../components/buttons";
import { useNavigation } from "@react-navigation/native";
import { Input } from "../../components/inputs";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

export default function Home() {

  type StatusType = {
    status:string;
  }
  const navigation = useNavigation<any>();
  const [btnStatus, setBtnStatus] = useState(true);
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
        <HStack space={3} justifyContent="center">
          <Center h="40" w="20" bg="primary.300" rounded="md" shadow={3} />
          <Center h="40" w="20" bg="primary.500" rounded="md" shadow={3} />
          <Center h="40" w="20" bg="primary.700" rounded="md" shadow={3} />
          <Center h="40" w="20" bg="primary.700" rounded="md" shadow={3} />
        </HStack>;
      </Center>
    
     </VStack>

    </NativeBaseProvider>
  );
}
