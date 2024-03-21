import { Route, Routes } from "react-router-dom";
import { useRoutes } from "react-router-dom";
import {    LoginPage, HomePage,ForgotPasswordPage, SelectUserPage, Customers } from "./RoutesMain";
import { Footer, Header, SideBar } from "./component/common";
import Dashboard from "./component/dashboard/Dashboard";
import User from "./component/user/User";
import  UserArchive  from "./component/user-archive/UserArchive";
import Roll from "./component/roll/Roll";
import { UserAddRole } from "./component/add-role/sub-component";
import PopUpAddCustomer from "./component/customers/sub-component/customer-popup/PopUpAddCustomer";
import PopUpAddObject from "./component/customers/sub-component/customer-popup/PopUpAddObject";
import CustomerArchive from "./component/customer-archive/CustomerArchive";
import CustomerObjectArchiveMain from "./component/objet-archive/CustomerObjectArchiveMain";
import CreateResidents from "./component/create-residents/CreateResidents";
import { CreateResidentArchiveList } from "./component/create-residents-archive/sub-component";
import PopUpUser from "./component/user/sub-component/user-popup/PopupUser";
import CreateUser from "./component/create-user/CreateUser";
// import PopUpResidents from "./component/home/sub-component/home-popup/PopUpResidents";

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
            <Route path="/dashboard" index element={<Dashboard />} />
            <Route path="/user" index element={<User />} />
            <Route path="/popup-user" index element={<PopUpUser />} />
            <Route path="/user-archive" index element={<UserArchive />} />
            <Route path="/roll" index element={<Roll />} />
            <Route path="/add-role" index element={<UserAddRole />} />
            <Route path="/customers" index element={<Customers />} />
            <Route path="/popup-add-customer" index element={<PopUpAddCustomer />} />
            <Route path="/popup-add-object" index element={<PopUpAddObject />} />
            <Route path="/customer-archive" index element={<CustomerArchive />} />
            <Route path="/customer-object-archive-main" index element={<CustomerObjectArchiveMain />} />
            <Route path="/create-residents" index element={<CreateResidents />} />
            <Route path="/create-residents-archive" index element={<CreateResidentArchiveList />} />
            <Route path="/create-user" index element={<CreateUser/>} />

            {/* <Route path="/ddd" index element={<PopUpResidents/>} /> */}
            {/* <Route path="/hotel-management" index element={<HotelManagementPage />} />
            <Route path="/add-hotel" index element={<AddHotelMainPage />} />
            <Route path="/edit-hotel" index element={<EditHotelMainPage />} />
            <Route path="/hotel-detail" index element={< HotelDetailMainPage />} />  */}
          </Routes>
        </main>
        <Footer />
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
