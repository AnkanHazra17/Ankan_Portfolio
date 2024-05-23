import React, { useEffect, useState } from "react";
import { fetchAllTimeLines } from "../services/operations/timeLineApi";

export const useTimeLine = () => {
  const [timeLines, setTimeLines] = useState([]);
  const [isLoading, setIsLloading] = useState(false);

  const getTimeLines = async () => {
    setIsLloading(true);
    const res = await fetchAllTimeLines();
    setTimeLines(res);
    setIsLloading(false);
  };

  useEffect(() => {
    getTimeLines();
  }, []);

  return { timeLines, isLoading };
};
