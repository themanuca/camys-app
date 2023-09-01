import { Center, Heading, VStack } from "native-base";
import { Input } from "../../components/inputs";
import { Button } from "../../components/buttons";

export default function Login() {
    return (
      <VStack  flex={1} paddingX={10}  _light={{
        bg: 'warmGray.100'
      }} shadow={3}>
        <Center>
            <Heading margin={'3em'} marginTop={'5em'}color={'#fc640c'} >
                Bem vindo !
            </Heading>
            <Input placeholder="E-mail"  placeholderTextColor={'primary.100'}/>
            <Input placeholder="Senha" type="password" placeholderTextColor={'primary.100'}/>
            <Button titulo="Acessar" bg={'#fc640cd1'}/>
        </Center>
      </VStack>
    );
  }
  