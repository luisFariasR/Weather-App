import { useState } from "react";
import InputPlaces from "../components/InputPlaces";
import ActualWeather from "../components/ActualWeather";
import GridWeather from "../components/Grid-Weather";
import Modal from "../components/ModalSearch";
import Todays from "../components/Todays";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <div className="bg-slate-900 flex flex-col md:flex-row">
        <div className="w-full md:w-[30%] relative ">
          {modalOpen && <Modal setModalOpen={setModalOpen} />}
          <InputPlaces setModalOpen={setModalOpen} />
          <ActualWeather />
        </div>
        <div className="md:w-[70%] bg-slate-950">
          <GridWeather />
          <Todays />
        </div>
      </div>
    </>
  );
}

export default App;
