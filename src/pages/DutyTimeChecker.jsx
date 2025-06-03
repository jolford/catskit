import React, { useState, useEffect } from "react";
import { DateTime } from "luxon";

const DutyTimeChecker = () => {
  const [startTime, setStartTime] = useState("");
  const [startZone, setStartZone] = useState("");
  const [endTime, setEndTime] = useState("");
  const [endZone, setEndZone] = useState("");
  const [result, setResult] = useState("");
  const [zones, setZones] = useState([]);

  useEffect(() => {
    const localZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setStartZone(localZone);
    setEndZone(localZone);
    const supported = Intl.supportedValuesOf("timeZone");
    setZones(supported);
  }, []);

  const checkLegality = () => {
    if (!startTime || !endTime || !startZone || !endZone) {
      setResult("Please fill in all fields.");
      return;
    }

    const start = DateTime.fromISO(startTime, { zone: startZone });
    let end = DateTime.fromISO(endTime, { zone: endZone });
    if (end < start) end = end.plus({ days: 1 });

    const dutyHours = end.diff(start, "hours").hours;

    if (dutyHours > 14) {
      setResult(`❌ Illegal: ${dutyHours.toFixed(2)} hrs exceeds 14-hour limit`);
    } else if (dutyHours >= 12) {
      setResult(`⚠️ Warning: ${dutyHours.toFixed(2)} hrs nearing max`);
    } else {
      setResult(`✅ Legal: ${dutyHours.toFixed(2)} hrs`);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">Duty Time Checker</h2>
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium">Start Time (Local)</label>
          <input
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
          <select
            value={startZone}
            onChange={(e) => setStartZone(e.target.value)}
            className="mt-2 w-full border px-3 py-2 rounded"
          >
            {zones.map((zone) => (
              <option key={zone}>{zone}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium">End Time (Local)</label>
          <input
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
          <select
            value={endZone}
            onChange={(e) => setEndZone(e.target.value)}
            className="mt-2 w-full border px-3 py-2 rounded"
          >
            {zones.map((zone) => (
              <option key={zone}>{zone}</option>
            ))}
          </select>
        </div>
      </div>
      <button
        onClick={checkLegality}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
      >
        Check Legality
      </button>
      {result && <p className="mt-4 text-lg font-semibold text-center">{result}</p>}
    </div>
  );
};

export default DutyTimeChecker;