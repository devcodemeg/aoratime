import { Route, Routes } from "react-router-dom";
import { useRoutes } from "react-router-dom";
import {    LoginPage, HomePage,ForgotPasswordPage, SelectUserPage, Customers, CreateResidentsArchiveMain, Monitoring, UserPage, UserArchivePage, RollPage, AddRolePage, CustomerArchivePage, CustomerObjectArchivePage, CreateResidentsPage, CreateUserPage, ReportingPage, ReportingPdfVersionPage, UserManagementMainPage } from "./RoutesMain";
import { Header, SideBar } from "./component/common";

const App=()=> {
  const routes = useRoutes([
    { path: "/login", element: <LoginPage /> },
    { path: "/forgot-password", element: <ForgotPasswordPage /> },
    { path: "/select-user", element: <SelectUserPage /> },
    {
      path: "/*",
      element: (
        <div class="grid-container">
        <Header />
        <SideBar />
        <main className="main">
          <Routes>
            <Route path="/" index element={<HomePage />} />
            {/* <Route path="/user-management" index element={<DashboardMainPage />} /> */}
            <Route path="/user-management" index element={<UserManagementMainPage />} />
            <Route path="/user" index element={<UserPage />} />
            <Route path="/user-archive" index element={<UserArchivePage />} />
            <Route path="/roll" index element={<RollPage />} />
            <Route path="/add-role" index element={<AddRolePage />} />
            <Route path="/customers" index element={<Customers />} />
            <Route path="/customer-archive" index element={<CustomerArchivePage />} />
            <Route path="/customer-object-archive-main" index element={<CustomerObjectArchivePage />} />
            <Route path="/create-residents" index element={<CreateResidentsPage />} />
            <Route path="/create-residents-archive" index element={< CreateResidentsArchiveMain />} />
            <Route path="/create-user" index element={<CreateUserPage/>} />
            <Route path="/reporting" index element={<ReportingPage/>} />
            <Route path="/reporting-pdf-version" index element={<ReportingPdfVersionPage/>} />
            <Route path="/monitoring" index element={<Monitoring />} />
          </Routes>
        </main>
        {/* <Footer /> */}
      </div>
      ),
    },
  ])
  return (
    <>
      {routes}
    </>
  );
}

export default App
