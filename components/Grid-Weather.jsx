export default function GridWeather() {
  
  return (
    <div className="bg-slate-950 pl-8 md:pl-20 ">
      <div className="degrees flex justify-end gap-10 pr-20 pt-15 pb-6">
        <div>
          <button className="bg-slate-100 w-[3rem] h-[3rem] rounded-4xl">
            °C
          </button>
        </div>
        <div>
          <button className="bg-slate-500 w-[3rem] h-[3rem] rounded-4xl">
            °F
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-7">
        <div className="bg-slate-800 p-4 w-[10rem] h-[14rem] flex flex-col justify-center">
          <div className="flex justify-center">
            <span className="text-white">Tomorrow</span>
          </div>
          <div className="p-6">
            <img src="./weather/04n.png" alt="" className="pb-2" />
          </div>
          <div className=" flex gap-8 justify-center">
            <span className="text-white">72°F</span>
            <span className="text-white">58°F</span>
          </div>
        </div>
       
      </div>
    </div>
  );
}
