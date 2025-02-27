// import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Mainlayout from './layouts/Mainlayout';
import Homepage from './pages/Homepage';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage,{jobLoader} from './pages/JobPage';


const router = createBrowserRouter(
  createRoutesFromElements(<Route path='/' element={<Mainlayout />}>
    <Route index element={<Homepage />} />
    <Route path='/jobs' index element={<JobsPage />} />
    <Route path='/add-job' index element={<NotFoundPage />} />
    <Route path='/jobs/:id' index element={<JobPage />}loader={jobLoader}/>
    <Route path='*' index element={<NotFoundPage />} />
  </Route>)
);

const App = () => {
  return <RouterProvider router={router} />;
}

export default App