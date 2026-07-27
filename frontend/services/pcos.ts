import axios from "axios";


const api = axios.create({

  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://127.0.0.1:8000/api",

  headers: {
    "Content-Type": "application/json",
  },

});




// GET PCOS PROFILE

export async function getPCOSProfile(
  accessToken: string
) {

  const response = await api.get(
    "/pcos/",
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );


  return response.data;

}





// UPDATE PCOS PROFILE

export async function updatePCOSProfile(

  accessToken: string,

  payload: any

) {


  const response = await api.patch(

    "/pcos/",

    payload,

    {

      headers: {

        Authorization: `Bearer ${accessToken}`,

      },

    }

  );


  return response.data;

}





// GET SYMPTOMS

export async function getSymptoms(

  accessToken: string

) {


  const response = await api.get(

    "/pcos/symptoms/",

    {

      headers: {

        Authorization: `Bearer ${accessToken}`,

      },

    }

  );


  return response.data;

}





// ADD SYMPTOM

export async function addSymptom(

  accessToken: string,

  symptom: string

) {


  const response = await api.post(

    "/pcos/symptoms/",

    {
      symptom,
    },

    {

      headers: {

        Authorization: `Bearer ${accessToken}`,

      },

    }

  );


  return response.data;

}





// DELETE SYMPTOM

export async function deleteSymptom(

  accessToken: string,

  id: number

) {


  await api.delete(

    `/pcos/symptoms/${id}/`,

    {

      headers: {

        Authorization: `Bearer ${accessToken}`,

      },

    }

  );


}