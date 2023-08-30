
import { NativeBaseProvider, Box } from "native-base";
import Login from './src/pages/login';

export default function App() {
  return (
    <NativeBaseProvider>
     <Login/>
    </NativeBaseProvider>
  );
}

