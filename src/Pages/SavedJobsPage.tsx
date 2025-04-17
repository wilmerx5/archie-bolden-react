import { HeadProvider, Meta, Title } from 'react-head';
import JobFilter from "../components/Jobs/JobFilter";
import JobList from "../components/Jobs/JobList";

function SavedJobsPage() {
    return (
        <>
            <HeadProvider>
                <Title>Saved Jobs – Archie</Title>
                <Meta
                    name="description"
                    content="Review and manage all the job listings you’ve saved on Jobify. Never lose track of your favorite opportunities."
                />
                <Meta name="robots" content="index, follow" />

                <Meta property="og:title" content="Saved Jobs – Jobify" />
                <Meta
                    property="og:description"
                    content="Keep track of and organize the job postings you’ve bookmarked on Jobify."
                />
                <Meta property="og:image" content="IMAGE_URL_FOR_SAVED_JOBS_PREVIEW" />
                <Meta property="og:url" content="https://www.jobify.com/saved-jobs" />
                <Meta property="og:type" content="website" />

                <Meta name="twitter:card" content="summary_large_image" />
                <Meta name="twitter:title" content="Saved Jobs – Jobify" />
                <Meta
                    name="twitter:description"
                    content="Manage your saved job postings in one place on Jobify."
                />
                <Meta name="twitter:image" content="IMAGE_URL_FOR_SAVED_JOBS_PREVIEW" />
            </HeadProvider>


            < div className="min-h-screen bg-gray-50 px-4 py-12">

                <section
                    id="job-filter"
                    aria-labelledby="filter-heading"
                    className="max-w-4xl mx-auto mb-8"
                >
                    <h2 id="filter-heading" className="sr-only">
                        Filter Saved Jobs
                    </h2>
                    <JobFilter />
                </section>

                <section
                    id="job-list"
                    aria-labelledby="list-heading"
                    className="max-w-7xl mx-auto"
                >
                    <h2 id="list-heading" className="sr-only">
                        List of Saved Jobs
                    </h2>
                    <JobList />
                </section>
            </div>
        </>
    );
}

export default SavedJobsPage;
