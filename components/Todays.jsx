export default function Todays() {
  return (
    <div className="bg-slate-950 text-white flex flex-col pl-20  pt-15 pb-8">
      <div className="pb-6">
        <h1 className="text-white font-semibold text-3xl">
          Today´s Highlights
        </h1>
      </div>
      <div className="grid grid-cols-1 md:flex md:flex-wrap gap-8">
        <div className="sqContent bg-slate-800 flex flex-col justify-center items-center h-[16rem] w-[28rem]  ">
          <span className="text-xl font-bold">Wind Status</span>
          <div className="flex py-8">
            <h1 className="text-6xl font-bold">9.15 </h1>
            <span className="text-4xl"> mph</span>
          </div>
          <div className="flex">
            <div className="bg-slate-500 rounded-3xl ">
              <img
                src="./navigation.svg"
                alt="navigation-icon"
                className="h-8"
              />
            </div>
            <span className="px-3 pt-1"> N</span>
          </div>
        </div>
        <div className="sqContent bg-slate-800 flex flex-col justify-center items-center h-[16rem] w-[28rem] ">
          <span className="text-xl font-bold">Humidity</span>
          <div className="flex py-7">
            <h1 className="text-6xl font-bold">58 </h1>
            <span className="text-4xl"> %</span>
          </div>
          <div className="flex flex-col w-[70%] ">
            <div className="flex justify-between  ">
              <span>0</span>
              <span>50</span>
              <span>100</span>
            </div>
            <div>--------barrita---------------</div>
            <div className="flex justify-end">
              <span>%</span>
            </div>
          </div>
        </div>
        <div className="sqContent bg-slate-800 flex flex-col justify-center items-center h-[16rem] w-[28rem] ">
          <span className="text-xl font-bold">Visibility</span>
          <div className="flex py-8">
            <h1 className="text-6xl font-bold">10.15 </h1>
            <span className="text-4xl"> km</span>
          </div>
         
        </div>
        <div className="sqContent bg-slate-800 flex flex-col justify-center items-center h-[16rem] w-[28rem] ">
          <span className="text-xl">Air Pressure</span>
          <div className="flex py-8">
            <h1 className="text-6xl font-bold">9.15 </h1>
            <span className="text-4xl"> mb</span>
          </div>
       
        </div>
      </div>
    </div>
  );
}
