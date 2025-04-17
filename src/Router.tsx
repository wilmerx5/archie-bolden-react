import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layouts/Layout';

import { Suspense, lazy } from "react";

// Importación diferida (lazy) de las páginas
const HomePage = lazy(() => import("./Pages/HomePage"));
const NewJobPage = lazy(() => import("./Pages/NewJobPage"));
const SavedJobsPage = lazy(() => import("./Pages/SavedJobsPage"));
function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route
                        path="/"
                        element={
                            <Suspense fallback={<div className="p-6 text-center">Loading Home...</div>}>
                                <HomePage />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/new"
                        element={
                            <Suspense fallback={<div className="p-6 text-center">Loading New Job Page...</div>}>
                                <NewJobPage />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/saved"
                        element={
                            <Suspense fallback={<div className="p-6 text-center">Loading Saved Jobs...</div>}>
                                <SavedJobsPage />
                            </Suspense>
                        }
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;

