import { useJobsStore } from "../../stores/store"
import JobDetail from "./JobDetail"

function JobList() {

  const  {jobs,selectedJobType}= useJobsStore()

 const filteredJobType =  selectedJobType !=''? jobs.filter(job=> job.type==selectedJobType):jobs

  return (
<div className="grid gap-4 px-4 sm:px-6 md:px-10 lg:px-20 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
  {filteredJobType.map((job) => (
    <JobDetail job={job} key={job.id} />
  ))}
</div>

  )
}

export default JobList