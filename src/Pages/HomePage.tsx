import JobFilter from "../components/Jobs/JobFilter";
import JobList from "../components/Jobs/JobList";


import { HeadProvider } from 'react-head';

import { Meta, Title } from 'react-head';

function HomePage() {
    return (
        <div>
            <HeadProvider>
                <Title>Jobify – Job Portal</Title>
                <Meta
                    name="description"
                    content="Jobify is your favorite job platform. Easily find jobs right from your browser."
                />
                <Meta name="robots" content="index, follow" />
                <Meta
                    property="og:title"
                    content="Jobify – Find Your Ideal Job"
                />
                <Meta
                    property="og:description"
                    content="The ultimate platform for job searches in your area. Access opportunities from anywhere."
                />
                <Meta property="og:image" content="IMAGE_URL" />
                <Meta property="og:url" content="https://www.jobify.com" />
                <Meta property="og:type" content="website" />
                <Meta name="twitter:card" content="summary_large_image" />
                <Meta name="twitter:title" content="Jobify – Job Portal" />
                <Meta
                    name="twitter:description"
                    content="Find your dream job with Jobify. Job opportunities for everyone."
                />
                <Meta name="twitter:image" content="IMAGE_URL" />
            </HeadProvider>


    

                <h1 className="text-4xl font-extrabold text-center text-gray-800 tracking-tight mb-6 mt-10">
                    <span className="text-blue-600">J</span>OBS
                </h1>

                <JobFilter />
                <JobList />
         

        </div>
    );
}

export default HomePage;
