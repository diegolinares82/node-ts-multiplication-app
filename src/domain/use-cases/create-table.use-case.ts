export interface CreateTableUseCase{
    execute:(options:CreateTableOptions)=>string;
}

export interface CreateTableOptions{
    base:number;
    limit?:number;
}

export class CreateTable implements CreateTableUseCase{
    constructor(

    ){}

    execute({base,limit=10}:CreateTableOptions){
        let outputMessage='';
        for (let i = 0; i <= limit; i++) {
            const resultado:number = base * i;
             outputMessage += `${base} x ${i} = ${resultado}\n`
        }
        return outputMessage;
    }
}