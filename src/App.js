import Appoinment from "./components/pages/Appoinment/Appoinment";
import Center from "./components/pages/centerForm/center";
import Doctor from "./components/pages/Doctors/Doctor";
import Feedback from "./components/pages/feedback/Feedback";
import Footer from "./components/Footer/Footer";
import Home from "./components/pages/home/Home";
import Login from "./components/pages/Login/Login";
import MyAppointment from "./components/pages/myAppoinment/MyAppointment";
import Nav from "./components/Navbar/Nav";
import NewAp from "./components/pages/newAppoinment/NewAp";
import NewDocoter from "./components/pages/Doctors/NewDocoter";
import NewLogin from "./components/pages/Login/NewLogin";
import NewRegister from "./components/pages/Register/NewRegister";
import Payment from "./components/pages/payment/Payment";
import Protect from "./components/pages/protected/Protect";
import Register from "./components/pages/Register/Register";
import Send from "./components/pages/sendEmail/Send";
import Service from "./components/pages/services/Service";
import Show from "./showList/Show";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  /* const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => {
    setSidebar((prevState) => !prevState);
  };*/

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/nr" element={<NewRegister />} />

        <Route path="register" element={<Register />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/" element={<Home />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/ndoctor" element={<NewDocoter />} />
        <Route path="/py" element={<Payment />} />
        <Route path="/ce" element={<Center />} />
        <Route path="/nm" element={<NewAp />} />

        <Route path="/s" element={<Show />} />

        <Route path="service" element={<Service />} />

        <Route path="/nl" element={<NewLogin />} />
        <Route path="/sendEmail" element={<Send />} />

        <Route path="/myAppointments" element={<MyAppointment />} />

        <Route
          path="/appointment"
          element={
            <Protect>
              <MyAppointment />
            </Protect>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
