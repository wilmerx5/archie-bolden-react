import FormJob from "../components/Jobs/FormJob";

function NewJobPage() {
    return (
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
    );
}

export default NewJobPage;
