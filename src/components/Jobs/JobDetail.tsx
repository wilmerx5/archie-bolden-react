import { useJobsStore } from "../../stores/store"
import { Job } from "../../types/job"

type JobDetailProps = {
    job: Job
}

function JobDetail({ job }: JobDetailProps) {

    const { selectJob } = useJobsStore()
    return (
        <div
            role="button"
            tabIndex={0}
            onClick={() => selectJob(job)}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    selectJob(job);
                }
            }}
            key={job.id}
            className="p-4 bg-white shadow rounded cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 flex flex-col items-center justify-center text-center"
            aria-label={`View job at ${job.company} for ${job.title} position`}
        >
            <h2 className="font-bold text-lg">{job.title}</h2>
            <p className="text-sm text-gray-600">{job.company} • {job.location}</p>
            <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded mt-2">{job.type}</span>
        </div>


    )
}

export default JobDetail