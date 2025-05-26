"use client";
import motions from "./Debating_Motions.json" assert { type: "json" };
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

async function fetchMotion(data) {
  console.log(data);
  const response = await fetch("http://127.0.0.1:8000/motions/", {
    method: "PUT",
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

export default function generate() {
  async function handleGenerate(formData) {
    const rawFormData = {
      motionTheme: formData.get("motionTheme"),
      motionDifficulty: formData.get("motionDifficulty"),
      motionFormat: formData.get("motionFormat"),
      motionDatabase: formData.get("motionDatabase"),
    };
    setMotionFormat(rawFormData.motionFormat);
    if (rawFormData.motionDatabase == "Hello Motions") {
      if (rawFormData.motionFormat == "British Parliamentary") {
        let randomIndex = Math.floor(Math.random() * motions.length);
        setMotionName(motions[randomIndex].Motion);
        setMotionInfoSlide(motions[randomIndex].Infoslide);
      } else if (rawFormData.motionFormat == "Asian Parliamentary") {
        let asianArray = [];
        for (let i = 0; i < 3; i++) {
          let randomIndex = Math.floor(Math.random() * motions.length);
          asianArray.push({
            motionName: motions[randomIndex].Motion,
            motionInfoSlide: motions[randomIndex].Infoslide,
          });
        }
        console.log(asianArray);
        setMotionAsian(asianArray);
      }
    } else {
      fetchMotion(rawFormData).then((response) => {
        if (response) {
          if (rawFormData.motionFormat == "British Parliamentary") {
            console.log(response);
            setMotionName(response.motionName);
            setMotionInfoSlide(response.infoSlide);
          } else if (rawFormData.motionFormat == "Asian Parliamentary") {
            console.log(response);
            setMotionAsian(response);
          }
        } else {
          setMotionName("");
          setMotionInfoSlide("");
        }
      });
    }
  }

  const [motionName, setMotionName] = useState("");
  const [motionInfoSlide, setMotionInfoSlide] = useState("");
  const [motionFormat, setMotionFormat] = useState("");
  const [motionAsian, setMotionAsian] = useState([]);
  const [motionDatabase, setMotionDatabase] = useState("");

  return (
    <main>
      <main className="flex justify-center">
        <form
          className="border-solid flex flex-col gap-3 items-center h-auto rounded-md border-2 w-10/12"
          action={handleGenerate}
        >
          <div className="flex flex-col gap-6  w-7/12 mt-10 ">
            <h1 className="m-1 text-xl self-center"> Motion Generator</h1>
            {motionFormat == "British Parliamentary" ? (
              <>
                {motionInfoSlide != "" ? (
                  <div>
                    <h5 className="text-md font-semibold"> Infoslide</h5>{" "}
                    <div className="text-justify"> {motionInfoSlide}</div>{" "}
                  </div>
                ) : (
                  <></>
                )}
                {motionName != "" ? (
                  <div>
                    <h5 className="text-md font-semibold"> Motion</h5>{" "}
                    <div className="text-justify"> {motionName}</div>{" "}
                  </div>
                ) : (
                  <></>
                )}{" "}
              </>
            ) : (
              <>
                {motionAsian.length != [] ? (
                  <>
                    <h4 className="text-md font-semibold"> InfoSlide</h4>
                    {motionAsian.map((motion, index) => {
                      return motion.motionInfoSlide == "" ? (
                        <></>
                      ) : (
                        <div className="text-justify" key={motion}>
                          Motion {index + 1}: {motion.motionInfoSlide}
                        </div>
                      );
                    })}
                    <h4 className="text-md font-semibold"> Motion</h4>
                    {motionAsian.map((motion, index) => {
                      return (
                        <div key={motion} className="text-justify">
                          {" "}
                          Motion {index + 1}: {motion.motionName}
                        </div>
                      );
                    })}
                  </>
                ) : (
                  <></>
                )}
              </>
            )}

            <div className="flex  gap-2 ">
              <div className="w-5/12">
                <h5> Format</h5>

                <Select
                  name="motionFormat"
                  defaultValue="British Parliamentary"
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue
                      value="British Parliamentary"
                      placeholder="British Parliamentary"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="British Parliamentary">
                      British Parliamentary
                    </SelectItem>
                    <SelectItem value="Asian Parliamentary">
                      Asian Parliamentary
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <dix className="w-6/12">
                <h5> Theme</h5>
                <Select name="motionTheme" defaultValue="Any">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue value="Any" placeholder="Any" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Any">Any</SelectItem>
                    <SelectItem value="Feminism">Feminism</SelectItem>
                    <SelectItem value="Relationships">Relationships</SelectItem>
                    <SelectItem value="International Relations">
                      International Relations
                    </SelectItem>
                    <SelectItem value="Economics">Economics</SelectItem>
                    <SelectItem value="Politics">Politics</SelectItem>
                    <SelectItem value="Media">Media"</SelectItem>
                    <SelectItem value="LGBTQ+">LGBTQ+</SelectItem>
                    <SelectItem value="Environment">Environment</SelectItem>
                    <SelectItem value="Philosophy">Philosophy</SelectItem>
                    <SelectItem value="Education">Education</SelectItem>
                    <SelectItem value="Technology">Technology</SelectItem>
                    <SelectItem value="Religion">Religion</SelectItem>
                  </SelectContent>
                </Select>
              </dix>
              <div className="w-1/3">
                <h5> Difficulty</h5>
                <Select name="motionDifficulty" defaultValue="Any">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Any" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Any">Any </SelectItem>
                    <SelectItem value="Easy">Easy</SelectItem>
                    <SelectItem value="Average">Average</SelectItem>
                    <SelectItem value="Hard">Hard</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-1/2">
                <h5> Database</h5>
                <Select name="motionDatabase" defaultValue="Hello Motions">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue
                      value="Hello Motions"
                      placeholder="Hello Motions"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Hello Motions">Hello Motions</SelectItem>
                    <SelectItem value="Aaron Data-bank">
                      Aaron Data-bank
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button> Generate Motion</Button>
          </div>
        </form>
      </main>
    </main>
  );
}
