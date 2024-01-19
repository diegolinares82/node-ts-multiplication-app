import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile, SaveFileUseCase } from '../domain/use-cases/save-file.use-case';

interface RunOptions{
    base:number;
    limit:number;
    showTable:boolean;
    fileName:string;
    destination:string
}
//Exporta como ira la aplicación de entrada


export class ServerApp{
    static run({base,limit,showTable,fileName,destination}:RunOptions){
        console.log('Server running....');
        const table = new CreateTable().execute({base,limit});
        //table es la data que se va a guardar en el archivo
        const wasCreated = new SaveFile().execute({fileContent:table,
                                                   fileDestination:destination,
                                                   fileName:fileName})
        if(showTable) console.log(table);
        (wasCreated) ? console.log('File created') : console.error('File not created');
    }
}