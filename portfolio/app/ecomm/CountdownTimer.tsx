"use client";
import { useEffect, useState } from "react";

export default function CountdownTimer() {
    const [timeLeft, setTimeLeft] = useState("");

    useEffect(() => {
        // Check for saved end time in LocalStorage
        let savedEndTime = localStorage.getItem("countdownEndTime");

        // If none, set to 24 hours from now
        if (!savedEndTime) {
            const newEndTime = Date.now() + 24*60*60*1000;
            localStorage.setItem("countdownEndTime", newEndTime.toString());
            savedEndTime = newEndTime.toString()
        }

        const endTime = parseInt(savedEndTime);

        const updateTimer = () => {
            const now = Date.now()
            const diff = endTime - now
            if (diff <= 0) {
                setTimeLeft("00:00:00");
                return;
        }

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft(
        `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`
      );
    };

    updateTimer(); // update immediately
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-xl font-bold text-red-500">
      Ends In: {timeLeft}
    </div>
  );
}

