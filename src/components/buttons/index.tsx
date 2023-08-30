import { IButtonProps, Button as NativeBaseButton, Text } from "native-base";


type Props = IButtonProps & {
    titulo: string;
}
export function Button({titulo,...res}:Props){
    return(
        <NativeBaseButton
        margin={8}
        height={30}
        width={40}
        {...res}
        >
            <Text>
                {titulo}
            </Text>
        </NativeBaseButton>
    );

}