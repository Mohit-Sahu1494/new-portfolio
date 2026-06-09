"use client";
import React, { useState } from "react";
import { MultiStepLoader as Loader } from "@/components/ui/multi-step-loader";
import { IconSquareRoundedX } from "@tabler/icons-react";

const loadingStates = [
  {
    text: "Buying a condo",
  },
  {
    text: "Travelling in a flight",
  },
  {
    text: "Meeting Tyler Durden",
  },
  {
    text: "He makes soap",
  },
  {
    text: "We goto a bar",
  },
  {
    text: "Start a fight",
  },
  {
    text: "We like it",
  },
  {
    text: "Welcome to F**** C***",
  },
];

export default function MultiStepLoaderDemo({setLoading}) {
  const [isLoading, setIsLoading] = useState(true);
  const DURATION = 1000;

  React.useEffect(() => {
    const totalDuration = loadingStates.length * DURATION;
    const timer = setTimeout(() => {
      setIsLoading(false);
      setLoading(true); 
    }, totalDuration);

    return () => clearTimeout(timer);
  }, [setLoading]);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#0A0A0A]">
      <Loader loadingStates={loadingStates} loading={isLoading} duration={DURATION} loop={false} />
    </div>
  );
}
