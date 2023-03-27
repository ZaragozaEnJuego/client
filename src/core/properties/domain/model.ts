export type Kind = 'Transport' | 'Education' | 'Health' | 'Groceries';



export type Propertie = {
  name: string;
  id: string;
  address: string;
  price: number;
  owner?: string;
  kind: Kind;
};


export const  DefaultPropertie = ():Propertie=>{

  return {address:"",id:"",kind: "Education",name:"",price:0}
}