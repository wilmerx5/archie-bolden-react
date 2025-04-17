import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layouts/Layout'
import HomePage from './Pages/HomePage'
import NewJobPage from './Pages/NewJobPage'

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path='/' element={<HomePage />}>  </Route>
                    <Route path='/new' element={<NewJobPage/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter