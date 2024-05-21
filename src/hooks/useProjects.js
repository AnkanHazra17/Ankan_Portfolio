import { useEffect, useState } from "react";
import { getAllProjects } from "../services/operations/projectApi";

export const useProjects = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getProjects = async () => {
    setIsLoading(true);
    const res = await getAllProjects();
    setProjects(res);
    setIsLoading(false);
  };

  useEffect(() => {
    getProjects();
  }, []);

  return { projects, isLoading };
};
