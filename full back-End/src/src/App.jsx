import { Outlet, Navigate, Route, Routes, useLocation } from "react-router-dom";

import { Footer, Navbar } from "./components";
import {
  About,
  AuthPage,
  Companies,
  CompanyProfile,
  FindJobs,
  JobDetail,
  UploadJob,
  UserProfile,
} from "./pages";
import { useSelector } from "react-redux";
 
import SignUp from "./components/Signin";
import Sign from "./components/Sign";
import Userdetails from "./components/profile";
import SignInOptions from "./components/Signoption";
import ASignUp from "./components/Adminlog";
import JobApplicationForm from "./components/JobApplica";

 
function Layout() {
  const { user } = useSelector((state) => state.user);
  const location = useLocation();

  return user?.token ? (
    <Outlet />
  ) : (
    <Navigate to='/user-auth' state={{ from: location }} replace />
  );
}

function App() {
  const { user } = useSelector((state) => state.user);
  return (
    <main className='bg-[#f7fdfd]'>
      <Navbar />

      <Routes>
        <Route element={<Layout />}>
          <Route
            path='/'
            element={<Navigate to='/find-jobs' replace={true} />}
          />
          <Route path='/find-jobs' element={<FindJobs />} />
          <Route path='/profile' element={<Userdetails />} />
          <Route path='/companies' element={<Companies />} />
          <Route
            path={
              user?.user?.accountType === "seeker"
                ? "/user-profile"
                : "/user-profile/:id"
            }
            element={<UserProfile />}
          />

          <Route path={"/company-profile"} element={<CompanyProfile />} />
          <Route path={"/company-profile/:id"} element={<CompanyProfile />} />
          <Route path={"/upload-job"} element={<UploadJob />} />
          <Route path={"/job-detail/:id"} element={<JobDetail />} />
        </Route>
<Route path="/signop" element={<SignInOptions/>}/>
        <Route path='/about-us' element={<About />} />
        <Route path='/user-auth' element={<AuthPage />} />
 <Route path="/sign" element={<SignUp/>}/>
 <Route path="/sig" element={<Sign/>}/>
 <Route path='/asig' element={<ASignUp/>}/>
 <Route path='/applica' element={<JobApplicationForm/>}/>


      </Routes>
      {user && <Footer />}
    </main>
  );
}

export default App;
