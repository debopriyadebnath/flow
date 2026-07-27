import axios from "axios";


const api = axios.create({

  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,

  headers:{
    "Content-Type":"application/json",
  },

});



export async function getJournals(
  token:string
){

const response =
await api.get(
"/journal/",
{
headers:{
Authorization:`Bearer ${token}`,
},
}
);


return response.data;

}





export async function createJournal(

token:string,

payload:{
title:string;
content:string;
}

){

const response =
await api.post(

"/journal/",

payload,

{
headers:{
Authorization:`Bearer ${token}`,
},
}

);


return response.data;

}