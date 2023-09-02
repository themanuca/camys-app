import { Center, Heading, VStack, Text, Container } from "native-base";
import { Input } from "../../components/inputs";
import { Button } from "../../components/buttons";
import { useForm, Controller } from "react-hook-form";

export default function Login() {

  type LoginType = {
    email:string;
    senha:string;
  }
  const {control, handleSubmit, formState:{errors}} = useForm<LoginType>();

  function hundleLogin(data:LoginType){
    console.log(data);
  }

  return (
    <VStack  flex={1} paddingX={10}  _light={{
      bg: 'warmGray.100'
    }} shadow={3}>
      <Center>
          <Heading margin={'3em'} marginTop={'5em'}color={'#fc640c'} >
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
              placeholder="E-mail" 
              onChangeText={onChange}  
              placeholderTextColor={'primary.100'}
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
            placeholder="Senha" 
            type="password"  
            onChangeText={onChange}  
            placeholderTextColor={'primary.100'}
            errorMessage={errors.senha?.message}
            />

          )}
          />
          <Button titulo="Acessar" bg={'#fc640cd1'} onPress={handleSubmit(hundleLogin)}/>
          <Text> Registre-se</Text>

      </Center>
    </VStack>
  );
}
  