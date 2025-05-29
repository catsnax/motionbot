"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

async function fetchAccounts(data) {
  const response = await fetch("https://motionbot.onrender.com/accounts", {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
  });
  return response.json();
}

export default function adminPage() {
  const [accounts, setAccounts] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    fetchAccounts().then((response) => {
      setAccounts(response);
      setIsLoaded(true);
      console.log(response);
      
    });    
  },
  []);

  return (
    <>
      {accounts ? (
        <table className = "border-2 w-[80vw] m-auto border-black text-center p-10">
          
          <th>Username</th> <th>Email</th><th>Verified</th> <th>Verify?</th>
          
          <tbody>
          {accounts.map((item) => (
          <tr key={item.id}>
           <td>{item.username}</td> 
           <td>{item.email_address}</td> 
           <td>{item.verified ? "Yes" : "No"}</td> 
           <td><button className = "rounded-sm bg-primary text-white w-1/3 p-1 m-2">{item.verified ? "" : "Verify" }</button></td>
          </tr>
        ))}
          </tbody>

        
        </table>
      ) : (
        <div>hi</div>
      )}
    </>
  );
}
