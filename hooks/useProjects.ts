import { useState, useEffect } from "react";
import { transformProjectsData } from "@/helpers/transformData";
import { Project } from "@/type";
import array from "@/public/data/avaliable-projects.json";

const useProjects = (): Project[] => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const data = transformProjectsData(array);
    setProjects(data);
  }, []);

  return projects;
}

export default useProjects;