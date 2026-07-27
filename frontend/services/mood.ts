import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://127.0.0.1:8000/api",
  headers: {
    "Content-Type": "application/json",
  },
});


export async function getMoods(accessToken: string) {

  const response = await api.get(
    "/mood/",
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  return response.data;
}



export async function createMood(
  accessToken: string,
  payload: {
    mood: string;
    note: string;
    energy_level: number;
  }
) {

  const response = await api.post(
    "/mood/",
    payload,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );


  return response.data;
}