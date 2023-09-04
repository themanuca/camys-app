import { IButtonProps, Button as NativeBaseButton, Text } from "native-base";


type Props = IButtonProps & {
    titulo: string;
    color:string;
}
export function Button({titulo,color,...res}:Props){
    return(
        <NativeBaseButton
        margin={8}
        height={50}
        width={40}
        {...res}
        _pressed={{
            backgroundColor:"#6a1a1a"
        }}
        >
            <Text 
            fontSize={16} 
            fontWeight={'bold'}
            color={color}
            >
                {titulo}
            </Text>
        </NativeBaseButton>
    );

}