import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Modal from "../components/Modal/Modal";
import useJobs from "../hooks/useJob";



export default function Layout() {

    const useJob = useJobs()
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <ToastContainer />

            <main className="flex-grow">
                <Outlet />
            </main>
            <Modal />
            <Footer />
        </div>
    );
}
