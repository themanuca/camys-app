import { string } from "yup";

export let tempData = [{
    id:"",
    nome:"",
    cor:"",
    todos:[{
        id: "",
        text: "",
        done: false
    }]
 }
]
export function limparTempData() {
    tempData = [];
}
  