import { useEffect, useRef } from "react";
import { jobs as defaultJobs } from "../data/jobs";
import { useJobsStore } from "../stores/store";
import { Job } from "../types/job";

const useJobs = () => {
    const { loadJobs, jobs } = useJobsStore();
    const hasMounted = useRef(false);

    useEffect(() => {
      const savedJobs = localStorage.getItem("jobs");
  
      try {
        const parsedJobs: Job[] = savedJobs ? JSON.parse(savedJobs) : defaultJobs;
        loadJobs(parsedJobs);
      } catch (error) {
        console.error("Error al parsear trabajos desde localStorage", error);
        loadJobs(defaultJobs);
      }
    }, [loadJobs]);
  
    // Guardar trabajos en localStorage cuando cambian, excepto en el primer render
    useEffect(() => {
      if (!hasMounted.current) {
        hasMounted.current = true;
        return;
      }
  
      localStorage.setItem("jobs", JSON.stringify(jobs));
    }, [jobs]);
  
    return { loadJobs };
  };
  
  export default useJobs;