import { useJobsStore } from "../../stores/store";
import JobDetail from "./JobDetail";

import { useLocation } from "react-router-dom";

export default function JobList() {
  const { pathname } = useLocation();
  const isSavedPage = pathname === "/saved";
  const { jobs, selectedJobType, savedJobs } = useJobsStore();

  const source = isSavedPage ? savedJobs : jobs;
  const filtered = selectedJobType
    ? source.filter((job) => job.type === selectedJobType)
    : source;

  return (
    <div className="grid gap-4 px-4 sm:px-6 md:px-10 lg:px-20 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {filtered.length > 0 ? filtered.map((job) => (
        <JobDetail job={job} key={job.id} />
      )) : <p className="text-center text-gray-500 mt-10" role="alert">
        There are not jobs to show
      </p>

      }


    </div>
  );
}