import { HeadProvider, Meta, Title } from "react-head";
import FormJob from "../components/Jobs/FormJob";

function NewJobPage() {
    return (
        <>
            <HeadProvider>
                <Title>Publicar una oferta de trabajo - Jobify</Title>
                <Meta name="description" content="Publica ofertas de trabajo en Jobify y encuentra talento ideal para tu empresa. Atrae candidatos rápidamente." />
                <Meta name="robots" content="index, follow" />
                <Meta property="og:title" content="Publica una oferta de trabajo en Jobify" />
                <Meta property="og:description" content="Atrae candidatos calificados con facilidad y promociona tu empresa. Publica ofertas en minutos." />
                <Meta property="og:image" content="URL_DE_LA_IMAGEN" />
                <Meta property="og:url" content="https://www.jobify.com/publicar-oferta" />
                <Meta property="og:type" content="website" />
                <Meta name="twitter:card" content="summary_large_image" />
                <Meta name="twitter:title" content="Publica una oferta de trabajo en Jobify" />
                <Meta name="twitter:description" content="Publica ofertas de trabajo en Jobify y encuentra el talento adecuado para tu empresa rápidamente." />
                <Meta name="twitter:image" content="URL_DE_LA_IMAGEN" />
            </HeadProvider>
            <main className="min-h-screen bg-gray-50 flex flex-col md:flex-row  justify-center px-4 py-12 gap-8">
                <section className="w-full md:w-1/2 max-w-xl">
                    <FormJob />
                </section>

                <section className="w-full md:w-1/2 text-center md:text-left px-4">
                    <h2 className="text-3xl font-extrabold text-gray-800 leading-tight mb-4">
                        <span className="text-blue-600">Publica</span> una oferta increíble y <br />
                        <span className="text-pink-500">encuentra talento</span> en minutos.
                    </h2>
                    <p className="text-gray-600 text-lg mb-4">
                        Conecta con miles de profesionales listos para hacer crecer tu empresa. Nuestra plataforma te facilita todo el proceso, desde la publicación hasta la contratación.
                    </p>

                    <ul className="text-gray-700 space-y-2 font-medium mb-6">
                        <li>* Atrae a candidatos ideales sin esfuerzo</li>
                        <li>* Filtra por tipo de trabajo fácilmente</li>
                        <li>* Promociona tu empresa de forma efectiva</li>
                        <li>* Haz seguimiento a tus publicaciones en tiempo real</li>
                    </ul>

                    <p className="text-gray-600 mb-6">
                        ¿Buscas desarrolladores, diseñadores, o expertos en marketing? Aquí están.
                    </p>

                    <div>
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition-colors shadow-md">
                            Ver candidatos destacados
                        </button>
                    </div>
                </section>

            </main>
        </>

    );
}

export default NewJobPage;
