export interface User {
    _id: string;
    username: string;
    password: string;
    role: string; 
    __v:number;
    person:{
        _id:string;
        name: string;
        sname: string;
        patronym: string;
    };
    group:{
        _id:string;
        name:string
    }
}