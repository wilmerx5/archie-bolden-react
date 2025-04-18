import { toast } from 'react-toastify';
import { v4 as uuid } from 'uuid';
import { create } from "zustand";
import { DraftJob, Job } from "../types/job";
type JobStore = {
    jobs: Job[],
    savedJobs: Job[],
    selectedJob: Job,
    updating: boolean,
    selectedJobType: string,
    addJob: (job: DraftJob) => void,
    selectJob: (job: Job) => void,
    closeModal: () => void,
    loadJobs: (jobs: Job[]) => void
    loadSavedJobs: (jobs: Job[]) => void

    setUpdating: () => void,
    updateJob: (job: DraftJob) => void,
    setJobTypeFiler: (jobType: string) => void
    handleSaveJob: (job: Job) => void

}

const initialSelectedJob: Job = {
    id: '',
    title: '',
    company: '',
    type: "Full-time",
    description: '',
    location: ''
}

export const useJobsStore = create<JobStore>((set, get) => ({
    jobs: [],
    selectedJob: initialSelectedJob,
    updating: false,
    selectedJobType: '',
    savedJobs: [],
    addJob: (job) => {
        const newJob: Job = { ...job, id: uuid() }
        set({
            jobs: [...get().jobs, newJob]
        })

    },
    selectJob: (job) => {
        set({
            selectedJob: job
        })
    },
    closeModal: () => {
        set({
            selectedJob: initialSelectedJob,
            updating: false
        })
    },
    loadJobs: (jobs) => {
        set({
            jobs: jobs
        })
    },
    loadSavedJobs: (jobs) => {
        set({
            savedJobs: jobs
        })
    },
    setUpdating: () => {
        set({
            updating: true
        })
    },
    updateJob: (job) => {

        set({
            jobs: get().jobs.map(patient => patient.id == get().selectedJob.id ? { id: patient.id, ...job } : patient),
        })

        get().closeModal()
    },
    setJobTypeFiler: (jobType) => {
        set({
            selectedJobType: jobType
        })

    },
    handleSaveJob: (job) => {
        set((state) => {
            const isSaved = state.savedJobs.some((el) => el.id === job.id);
            !isSaved? toast.success('Saved'): toast.error('Unsaved')
            const updatedSavedJobs = isSaved
                ? state.savedJobs.filter((el) => el.id !== job.id)
                : [...state.savedJobs, job];
            return { savedJobs: updatedSavedJobs };
        });

        get().closeModal()


    }

}))