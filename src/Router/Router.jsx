import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../Pages/HomePage";
import CreateJob from "../Pages/CreateJob";
import MyJobs from "../Pages/MyJobs";
import SalaryPage from "../Pages/SalaryPage";
import UpdateJob from "../Pages/UpdateJob";
import LoginPage from "../components/LoginPage";
import JobDetails from "../Pages/JobDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {path: '/',
        element: <HomePage/>},
        {
          path: "/post-job",
          element: <CreateJob/>
        },
        {
          path: "/my-job",
          element: <MyJobs/>
        },
        {
          path: "/salary",
          element: <SalaryPage/>
        },
        {
          path: "/edit-job/:id",
          element: <UpdateJob/>,
          loader: ({params}) => fetch(`http://localhost:5000/all-jobs/${params.id}`)
        },
        {
          path: "/job/:id",
          element: <JobDetails/>
        }
      ]
    },
    {
      path: "/login",
      element: <LoginPage/>
    }
  ]);
  export default router;