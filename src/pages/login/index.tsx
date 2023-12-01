import { Center, Heading, VStack, Text, NativeBaseProvider } from "native-base";
import { Input } from "../../components/inputs";
import { Button } from "../../components/buttons";
import { useForm, Controller } from "react-hook-form";
import {useNavigation} from "@react-navigation/native"

export default function Login() {
  const navigation = useNavigation<any>();
  type LoginType = {
    email:string;
    senha:string;
  }
  const {control, handleSubmit, formState:{errors}} = useForm<LoginType>();

  function hundleLogin(data:LoginType){
     navigation.navigate("Home")
  }

  return (
    <NativeBaseProvider>
      <VStack  flex={1} paddingX={10}  _light={{
        bg: '#FFF5F5'
      }} shadow={3}>
        <Center>
            <Heading margin={'3em'} marginTop={'5em'}color={'#9b2626'} >
                Bem vindo !
            </Heading>
            <Controller
              control={control}
              rules={{
                required:'Informe seu E-mail',
                pattern:{
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'E-mail Invalido'
                }
              }}
              name="email"
              render={({ field:{onChange} })=>(
                <Input
                altura={16}
                placeholder="E-mail" 
                onChangeText={onChange}  
                errorMessage={errors.email?.message}
                />

              )}
            />
            <Controller
            control={control}
            rules={{
              required:'Por favor, preencha todos os campos obrigatórios.'
            }}
            name="senha"
            render={({ field:{onChange} })=>(
              <Input
              altura={16}
              placeholder="Senha" 
              type="password"  
              onChangeText={onChange}  
              errorMessage={errors.senha?.message}

              />

            )}
            />
            <Button titulo="Acessar" bg={'#9b2626'} color='#FFF5F5' onPress={handleSubmit(hundleLogin)}/>
            <Text> Registre-se</Text>

        </Center>
      </VStack>
    </NativeBaseProvider>
  );
}
  