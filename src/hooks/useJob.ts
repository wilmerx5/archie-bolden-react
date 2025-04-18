import { useEffect, useRef } from "react";
import { jobs as defaultJobs } from "../data/jobs";
import { useJobsStore } from "../stores/store";
import { Job } from "../types/job";

const useJobs = () => {
  const { loadJobs, loadSavedJobs, jobs, savedJobs } = useJobsStore();
  const hasMountedJobs = useRef(false);
  const hasMountedSaved = useRef(false);

  useEffect(() => {
    const rawJobs = localStorage.getItem("jobs");
    try {
      const parsedJobs: Job[] = rawJobs ? JSON.parse(rawJobs) : defaultJobs;
      loadJobs(parsedJobs);
    } catch (err) {
      console.error("Error parsing 'jobs' from localStorage", err);
      loadJobs(defaultJobs);
    }

    const rawSaved = localStorage.getItem("savedJobs");
    if (rawSaved) {
      try {
        loadSavedJobs(JSON.parse(rawSaved));
      } catch {
        console.error("Error parsing 'savedJobs'", rawSaved);
        loadSavedJobs([]);
      }
    } else {
      loadSavedJobs([]);
    }
  }, [loadJobs, loadSavedJobs]);

  // 2. sync jobs in localStorage
  useEffect(() => {
    if (!hasMountedJobs.current) {
      hasMountedJobs.current = true;
      return;
    }
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);

  useEffect(() => {
    if (!hasMountedSaved.current) {
      hasMountedSaved.current = true;
      return;
    }
    localStorage.setItem("savedJobs", JSON.stringify(savedJobs));
  }, [savedJobs]);

  return { loadJobs, loadSavedJobs, jobs, savedJobs };
};

export default useJobs;
