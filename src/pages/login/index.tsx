import { Center, Heading, VStack } from "native-base";
import { Input } from "../../components/inputs";
import { Button } from "../../components/buttons";

export default function Login() {
    return (
      <VStack  flex={1} paddingX={10}  _light={{
        bg: '#c4643a'
      }} shadow={3}>
        <Center>
            <Heading margin={'3em'} marginTop={'5em'}color={'primary.50'} >
                Bem vindo !
            </Heading>
            <Input placeholder="E-mail" placeholderTextColor={'primary.100'}/>
            <Input placeholder="Senha" type="password" placeholderTextColor={'primary.100'}/>
            <Button titulo="Acessar"/>
        </Center>
      </VStack>
    );
  }
  