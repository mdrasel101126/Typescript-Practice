
//a type is dependent on another type
type a1=number;
type a2= a1 extends string?string:null;
 type a3=undefined;
 type a4= number;
 //nested conditional type
 type d=a1 extends null?null:a3 extends number?number:a4 extends null?null:never;

 type Shaikh={
    wife1:string;
    wife2:string;
 };

 // check korbe ei Shikh Type a wife1 ase kina?true :false

 type CheckProperty<T>=T extends {wife1:string}?true:false;
 type CheckWife1=CheckProperty<Shaikh>

 type A = keyof Shaikh;
 type CheckProperty2<T,K>=K extends keyof Shaikh?true:false;
 type CheckWife2 = CheckProperty2<Shaikh,'wife2'>;

 //matha kharap example

 type Bandhubi='Monika' | 'Rachel' | 'Pheode';

 type RemoveBandhubi<T,K>=T extends K?never:T;

 type CurrentBandhubi= RemoveBandhubi<Bandhubi,'Mim'>



