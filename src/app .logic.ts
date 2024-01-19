import fs from "fs";
import { join } from "path";
import { yarg } from "./config/plugins/args.plugin";


const {b:base, l:limit, s:showTable}=yarg;
let outputMessage= '';
const headerMessage: string = `
-------------------------------------------
-------------------------------------------
        Tabla del ${base}
-------------------------------------------
-------------------------------------------
`


for (let i = 0; i <= limit; i++) {
    const resultado:number = base * i;
     outputMessage += `${base} x ${i} = ${resultado}\n`



}

outputMessage = headerMessage + outputMessage;

if(showTable){
        console.log(outputMessage)
}


const outputPath =`outputs/`
fs.mkdirSync(outputPath,{recursive:true});
fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, outputMessage);
