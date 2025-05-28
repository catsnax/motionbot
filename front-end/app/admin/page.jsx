"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

async function fetchAccounts(data) {
  const response = await fetch("http://127.0.0.1:8000/accounts/", {
    method: "PATCH",
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
  return (
    <>
      <h1> admin page</h1>
    </>
  );
}
