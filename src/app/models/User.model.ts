export class User{
    constructor(public nom:string,
                public username:string,
                public email:string,
                public telephone:string,
                public adresse?:string,
                public status?:string,
                public image?:any,
                public id?:number,
                public roles?:any,
                public entreprise?:any,
                public password?:string
                ){}
}