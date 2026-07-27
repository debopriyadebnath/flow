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


        console.log("PROFILE RESPONSE:", response);


        setData(response);


      } catch (err: any) {


        console.log("PROFILE ERROR:", err);


        setError(
          err.response?.data?.detail ||
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
          Loading profile... 🌸
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




  return (

    <main className="min-h-screen bg-pink-50 px-6 py-10">


      <div className="mx-auto max-w-3xl">


        <div className="rounded-3xl bg-white p-8 shadow">


          <h1 className="text-3xl font-semibold">
            My Profile 🌸
          </h1>



          {data && (

            <div className="mt-8 space-y-4 text-slate-700">


              <div>
                <b>Name:</b>{" "}
                {data.user.first_name} {data.user.last_name}
              </div>



              <div>
                <b>Email:</b>{" "}
                {data.user.email}
              </div>



              <hr />



              <div>
                <b>Blood Group:</b>{" "}
                {data.profile?.blood_group || "Not added"}
              </div>



              <div>
                <b>Age:</b>{" "}
                {data.profile?.age || "Not added"}
              </div>



              <div>
                <b>Weight:</b>{" "}
                {data.profile?.weight_kg || "Not added"} kg
              </div>



              <div>
                <b>Height:</b>{" "}
                {data.profile?.height_cm || "Not added"} cm
              </div>



              <div>
                <b>Medical History:</b>{" "}
                {data.profile?.medical_history || "Not added"}
              </div>



              <div>
                <b>Emergency Contact:</b>{" "}
                {data.profile?.emergency_contact_name || "Not added"}
              </div>



            </div>

          )}



        </div>


      </div>


    </main>

  );

}