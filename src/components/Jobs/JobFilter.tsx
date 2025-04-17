import { ChangeEvent } from "react"
import { useJobsStore } from "../../stores/store"
import { jobTypes } from "./FormJob"

function JobFilter() {

    const {setJobTypeFiler,selectedJobType} = useJobsStore()
    const handleChange=(e: ChangeEvent<HTMLSelectElement>)=>{

            setJobTypeFiler(e.target.value)

    }
    return (
        <section className="p-6 bg-white shadow rounded-lg max-w-lg mx-auto mb-10 ">
        <fieldset className="space-y-4">
          <legend className="text-xl font-semibold text-gray-800 mb-4">Filter Jobs By Type</legend>
          
          <form className="flex flex-col">
            <label htmlFor="type" className="text-sm font-medium text-gray-700 mb-2">
              Job Type
            </label>
            
            <select
            onChange={handleChange}
            value={selectedJobType}
              id="type"
              className="border border-gray-300 rounded-lg p-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
            >
              <option value="">-- Select a Type--</option>
              {jobTypes.map((jobType) => (
                <option value={jobType} key={jobType}>
                  {jobType}
                </option>
              ))}
            </select>
          </form>
        </fieldset>
      </section>
      
    )
}

export default JobFilter