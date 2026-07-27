"use client";

import { useEffect, useState } from "react";

import { getProfile } from "@/services/auth";


export default function ProfilePage() {

  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);



  useEffect(() => {

    async function fetchProfile() {

      const token = localStorage.getItem("access");


      console.log("TOKEN:", token);


      if (!token) {

        setError("No access token found. Please login again.");
        setLoading(false);
        return;

      }


      try {

        const response = await getProfile(token);


        console.log(
          "PROFILE RESPONSE:",
          JSON.stringify(response, null, 2)
        );


        setData(response);


      } catch (err: any) {

        console.log("PROFILE ERROR:", err);


        setError(
          err?.response?.data?.detail ||
          "Unable to load profile"
        );


      } finally {

        setLoading(false);

      }

    }


    fetchProfile();


  }, []);




  if (loading) {

    return (

      <main className="min-h-screen bg-pink-50 p-10">

        <h1 className="text-2xl font-semibold">
          Loading profile 🌸
        </h1>

      </main>

    );

  }




  if (error) {

    return (

      <main className="min-h-screen bg-pink-50 p-10">

        <div className="rounded-3xl bg-white p-8 shadow">

          <h1 className="text-2xl font-semibold text-red-500">
            Error
          </h1>

          <p className="mt-3">
            {error}
          </p>

        </div>

      </main>

    );

  }



  // handles both:
  // response.user.first_name
  // response.first_name

  const user = data?.user || data;



  const profile = data?.profile || {};




  return (

    <main className="min-h-screen bg-pink-50 px-6 py-10">


      <div className="mx-auto max-w-3xl">


        <div className="rounded-3xl bg-white p-8 shadow">


          <h1 className="text-3xl font-semibold">
            My Profile 🌸
          </h1>



          <div className="mt-8 space-y-5 text-slate-700">


            <p>
              <b>Name:</b>{" "}
              {user?.first_name || "Not added"}{" "}
              {user?.last_name || ""}
            </p>



            <p>
              <b>Email:</b>{" "}
              {user?.email || "Not added"}
            </p>



            <hr />



            <p>
              <b>Blood Group:</b>{" "}
              {profile?.blood_group || "Not added"}
            </p>



            <p>
              <b>Age:</b>{" "}
              {profile?.age || "Not added"}
            </p>



            <p>
              <b>Weight:</b>{" "}
              {profile?.weight_kg || "Not added"} kg
            </p>



            <p>
              <b>Height:</b>{" "}
              {profile?.height_cm || "Not added"} cm
            </p>



            <p>
              <b>Medical History:</b>{" "}
              {profile?.medical_history || "Not added"}
            </p>



            <p>
              <b>Emergency Contact:</b>{" "}
              {profile?.emergency_contact_name || "Not added"}
            </p>



          </div>



        </div>


      </div>


    </main>

  );

}