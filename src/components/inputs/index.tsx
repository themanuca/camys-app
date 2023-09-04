import { FormControl, IInputProps, Input as NativeBaseInput } from "native-base";

type Props=IInputProps & {
    errorMessage?:string | null;
    altura:number;
}
export function Input({errorMessage = null,isInvalid,altura,...res}:Props){
    const invalid = !!errorMessage || isInvalid;
    return(
        <FormControl isInvalid={invalid} marginBottom={4}>
            <NativeBaseInput
                bg="#E0FFFF"
                fontSize={'md'}
                isInvalid={invalid}
                height={altura}
                borderRadius={10}
                _focus={{
                    backgroundColor:' #d49f9f'
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