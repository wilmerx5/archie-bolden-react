import JobFilter from "../components/Jobs/JobFilter";
import JobList from "../components/Jobs/JobList";
import Modal from "../components/Modal/Modal";


import { HeadProvider } from 'react-head';

import { Meta, Title } from 'react-head';

function HomePage() {
    return (
        <div>
            {/* SEO Setup */}
            <HeadProvider>
                <Title>Jobify - Portal de Empleos</Title>
                <Meta name="description" content="Jobify es tu plataforma de empleos favorita. Encuentra trabajos fácilmente desde tu navegador." />
                <Meta name="robots" content="index, follow" />
                <Meta property="og:title" content="Jobify - Encuentra tu trabajo ideal" />
                <Meta property="og:description" content="Plataforma para búsqueda de empleos en tu área. Accede a oportunidades laborales desde cualquier lugar." />
                <Meta property="og:image" content="URL_DE_LA_IMAGEN" />
                <Meta property="og:url" content="https://www.jobify.com" />
                <Meta property="og:type" content="website" />
                <Meta name="twitter:card" content="summary_large_image" />
                <Meta name="twitter:title" content="Jobify - Portal de Empleos" />
                <Meta name="twitter:description" content="Encuentra el trabajo de tus sueños con Jobify. Oportunidades laborales para todos." />
                <Meta name="twitter:image" content="URL_DE_LA_IMAGEN" />
            </HeadProvider>

            <h1 className="text-4xl font-extrabold text-center text-gray-800 tracking-tight mb-6 mt-10">
                <span className="text-blue-600">J</span>OBS
            </h1>

            <JobFilter/>
            <JobList />

            <Modal />
        </div>
    );
}

export default HomePage;
