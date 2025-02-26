export default function InputPlaces({ setModalOpen }) {
  return (
    <div className="bg-slate-900 ">
      <div className="flex justify-around py-2">
        <button
          className="search text-white hover:cursor-pointer bg-slate-500 h-[2rem] px-2"
          onClick={() => setModalOpen(true)}
        >
          Search for Places
        </button>
        <img
          onClick={() => setShowCity(true)}
          src="/location.svg"
          alt="location-icon"
          className="bg-slate-500 h-[2.5rem] hover:cursor-pointer rounded-3xl"
        />
      </div>
      <div className="h-60 w-full  flex justify-center items-center relative">
        <img
          src="./others/Cloud-background.png"
          alt=""
          className=" object-cover opacity-25  w-full h-full"
        />{" "}
        
          <div className="locationIcon w-24 aspect-square absolute ">
            <img src="./weather/01d.png" alt="" className="" />
          </div>
        
      </div>
    </div>
  );
}
