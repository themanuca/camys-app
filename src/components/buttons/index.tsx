import { IButtonProps, Button as NativeBaseButton, Text } from "native-base";


type Props = IButtonProps & {
    titulo: string;
}
export function Button({titulo,...res}:Props){
    return(
        <NativeBaseButton
        margin={8}
        height={50}
        width={40}
        {...res}
        _pressed={{
            backgroundColor:"#fb8f32"
        }}
        >
            <Text 
            fontSize={16} 
            fontWeight={'bold'}
            >
                {titulo}
            </Text>
        </NativeBaseButton>
    );

}