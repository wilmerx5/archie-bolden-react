import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useJobsStore } from "../../stores/store";
import { DraftJob } from "../../types/job";
import FormError from "../Utils/FormError";


export const jobTypes = ["Full-time", "Contract", "Part-time"];
export default function FormJob() {
    const { addJob, updating, selectedJob, updateJob } = useJobsStore()

    const {
        register,
        reset,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<DraftJob>();

    const onSubmit: SubmitHandler<DraftJob> = (data: DraftJob) => {

        if (updating) {
            updateJob(data)
            toast.success('Updated Job')

        } else {

            toast.success('New jod added')
            addJob(data)
        }
        reset()
    };

    useEffect(() => {
        if (updating) {
            setValue('title', selectedJob.title)
            setValue('description', selectedJob.description)
            setValue('type', selectedJob.type)
            setValue('company', selectedJob.company)
            setValue('location', selectedJob.location)


        }
    }, [updating])

    return (
        <section className="max-w-3xl mx-auto bg-white shadow-2xl rounded-3xl p-10  border border-gray-100">
            <h2 className="text-3xl font-bold text-blue-700 mb-8 md:text-center">
                {updating ? 'Update Job' : 'Post a job'}
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                <div>
                    <label
                        htmlFor="title"
                        className="block mb-2 text-sm font-semibold text-gray-700"
                    >
                        Job Title
                    </label>
                    <input
                        id="title"
                        {...register("title", {
                            required: "Job Title is required",
                        })}
                        placeholder="e.g. Frontend Developer"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-200 focus:border-blue-600 transition text-gray-800"
                    />
                    {errors.title && (
                        <FormError>
                            {errors.title?.message}
                        </FormError>
                    )}
                </div>

                <div>
                    <label
                        htmlFor="company"
                        className="block mb-2 text-sm font-semibold text-gray-700"
                    >
                        Company
                    </label>
                    <input
                        id="company"
                        {...register("company", {
                            required: "Company is required",
                        })}
                        placeholder="e.g. BizInc Solutions"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-200 focus:border-blue-600 transition text-gray-800"
                    />
                    {errors.company && (
                        <FormError>
                            {errors.company?.message}
                        </FormError>
                    )}
                </div>

                <div>
                    <label
                        htmlFor="location"
                        className="block mb-2 text-sm font-semibold text-gray-700"
                    >
                        Location
                    </label>
                    <input
                        id="location"
                        {...register("location", {
                            required: "Location is required",
                        })}
                        placeholder="e.g. Remote or Medellín"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-200 focus:border-blue-600 transition text-gray-800"
                    />
                    {errors.location && (
                        <FormError>
                            {errors.location?.message}
                        </FormError>
                    )}
                </div>



                <div>
                    <label
                        htmlFor="jobType"
                        className="block mb-2 text-sm font-semibold text-gray-700">
                        Job Type
                    </label>
                    <select
                        id="jobType"
                        {...register("type", { required: "Type is required" })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:ring-2 focus:ring-blue-200 focus:border-blue-600 transition"
                    >
                        <option value="">Select type</option>

                        {jobTypes.map((type) => <option
                            key={type}
                            value={type}

                        >{type}</option>)}
                    </select>
                    {errors.type && (
                        <FormError>
                            {errors.type.message}
                        </FormError>
                    )}
                </div>

                {/* Description */}
                <div>
                    <label className="block mb-2 text-sm font-semibold text-gray-700">
                        Description
                    </label>
                    <textarea
                        rows={4}
                        {...register("description", {
                            required: "Description is required",
                        })}
                        placeholder="Write a detailed job description..."
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-200 focus:border-blue-600 transition resize-none text-gray-800"
                    />
                    {errors.description && (
                        <FormError>
                            {errors.description.message}
                        </FormError>

                    )}
                </div>

                <div className="pt-4">
                    <button
                        type="submit"
                        className="w-full py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition"
                    >
                        {updating ? 'Update Job' : 'Post Job'}
                    </button>
                </div>
            </form>
        </section>
    );
}
