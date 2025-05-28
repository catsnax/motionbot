"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

async function fetchAccounts(data) {
  const response = await fetch("http://127.0.0.1:8000/accounts/", {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  });
  return response.json();
}

export default function adminPage() {
  const [accounts, setAccounts] = useState(fetchAccounts());
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    fetchAccounts().then((response) => {
      setAccounts(response);
      setIsLoaded(true);
      console.log(response);
    }),
      [];
  });

  return (
    <>
      {isLoaded ? (
        accounts.map((account, index) => {
          <div key={account}>{account.username}</div>;
        })
      ) : (
        <div>hi</div>
      )}
    </>
  );
}
