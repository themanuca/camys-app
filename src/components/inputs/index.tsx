import { IInputProps, Input as NativeBaseInput } from "native-base";
export function Input({...res}:IInputProps){
    return(
        <NativeBaseInput
            bg="#987e62"
            fontSize={'md'}
            height={16}
            marginBottom={4}
            _focus={{
                backgroundColor:'#cdbea0'
            }}
            {...res}
        />
    );
}