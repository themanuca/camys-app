import { FormControl, IInputProps, Input as NativeBaseInput } from "native-base";

type Props=IInputProps & {
    errorMessage?:string | null;
}
export function Input({errorMessage = null,isInvalid,...res}:Props){
    const invalid = !!errorMessage || isInvalid;
    return(
        <FormControl isInvalid={invalid} marginBottom={4}>
            <NativeBaseInput
                bg="#886058"
                fontSize={'md'}
                isInvalid={invalid}
                height={16}
                borderRadius={10}
                _focus={{
                    backgroundColor:'#cdbea0'
                }}
                {...res}
                _invalid={{
                    borderWidth:2
                }}
            />
            <FormControl.ErrorMessage>
               {errorMessage}
            </FormControl.ErrorMessage>
        </FormControl>
    );
}