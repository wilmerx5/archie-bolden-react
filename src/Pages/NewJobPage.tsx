import { HeadProvider, Meta, Title } from "react-head";
import FormJob from "../components/Jobs/FormJob";

function NewJobPage() {
    return (
        <>
            <HeadProvider>
                <Title>Post a Job – Jobify</Title>
                <Meta
                    name="description"
                    content="Post job openings on Jobify and find the ideal talent for your company. Attract candidates quickly."
                />
                <Meta name="robots" content="index, follow" />
                <Meta
                    property="og:title"
                    content="Post a job on Jobify"
                />
                <Meta
                    property="og:description"
                    content="Easily attract qualified candidates and promote your company. Post openings in minutes."
                />
                <Meta property="og:image" content="IMAGE_URL" />
                <Meta property="og:url" content="https://www.jobify.com/post-job" />
                <Meta property="og:type" content="website" />
                <Meta name="twitter:card" content="summary_large_image" />
                <Meta
                    name="twitter:title"
                    content="Post a job on Jobify"
                />
                <Meta
                    name="twitter:description"
                    content="Post job openings on Jobify and quickly find the right talent for your company."
                />
            </HeadProvider>

            <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row  justify-center px-4 py-12 gap-8">
                <section className="w-full md:w-1/2 max-w-xl">
                    <FormJob />
                </section>

                <section className="w-full md:w-1/2 text-center md:text-left px-4">
                    <h2 className="text-3xl font-extrabold text-gray-800 leading-tight mb-4">
                        <span className="text-blue-600">Post</span> an amazing job and <br />
                        <span className="text-pink-500">find talent</span> in minutes.
                    </h2>
                    <p className="text-gray-600 text-lg mb-4">
                        Connect with thousands of professionals ready to help your business grow. Our platform makes the entire process easy, from posting to hiring.
                    </p>

                    <ul className="text-gray-700 space-y-2 font-medium mb-6">
                        <li>⭐ Attract ideal candidates with ease</li>
                        <li>🔍 Filter by job type effortlessly</li>
                        <li>📢 Promote your company effectively</li>
                        <li>📈 Track your postings in real time</li>
                    </ul>

                    <p className="text-gray-600 mb-6">
                        Looking for developers, designers, or marketing experts? They’re here.
                    </p>

                    <div>
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition-colors shadow-md">
                            See Amazing Candidates
                        </button>
                    </div>
                </section>


            </div>
        </>

    );
}

export default NewJobPage;
