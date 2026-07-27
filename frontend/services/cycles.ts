import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});


export async function getCycles(accessToken: string) {
  const response = await api.get("/cycles/", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response.data;
}


export async function createCycle(
  accessToken: string,
  payload: {
    last_period_start: string;
    cycle_length_days: number;
    period_length_days: number;
    is_active: boolean;
  }
) {
  const response = await api.post("/cycles/", payload, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response.data;
}


export async function createCycleEntry(
  accessToken: string,
  cycleId: number,
  payload: {
    entry_date: string;
    symptoms: string[];
    pain_level: number;
    flow: string;
    energy_level: number;
    sleep_hours: number;
    water_intake_ml: number;
  }
) {
  const response = await api.post(
    `/cycles/${cycleId}/entries/`,
    payload,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  return response.data;
}