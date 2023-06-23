import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import SystemOff from "./components/SystemOff/SystemOff";
import OffModal from "./components/OffModal/OffModal";
import InModal from "./components/InModal/InModal";

function App() {
  return (
    <div className="flex align-start justify-start flex-col h-screen w-screen max-w-screen">
      <Header />
      <InModal />
      <Home />
      <SystemOff />
      <OffModal />
      <Footer />
    </div>
  );
}

export default App;
