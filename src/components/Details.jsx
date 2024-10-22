function Details({isp, location, ipAddress, timezone}) {
  return (
    <div className="w-full h-full bg-white lg:grid grid-cols-4 grid-rows-1 gap-5 pl-8 py-5 text-[#2B2B2B] ">
      <div className="w-full h-full text-center lg:text-left  lg:border-r pt-4 border-[#08080846] space-y-3">
        <p className="text-[#1615158e] text-xs font-bold tracking-wider ">
          IP ADDRESS
        </p>
        <h3 className="font-bold text-2xl">{ipAddress}</h3>
      </div>
      <div className="w-full h-full text-center lg:text-left  lg:border-r pt-4 border-[#08080846] space-y-3">
        <p className="text-[#1615158e] text-xs font-bold tracking-wider ">
          LOCATION
        </p>
        <h3 className="font-bold text-2xl max-w-[70%]">{location}</h3>
      </div>
      <div className="w-full h-full text-center lg:text-left  lg:border-r pt-4 border-[#08080846] space-y-3">
        <p className="text-[#1615158e] text-xs font-bold tracking-wider ">
          TIMEZONE
        </p>
        <h3 className="font-bold text-2xl">{timezone}</h3>
      </div>
      <div className="w-full h-full text-center lg:text-left   pt-4  space-y-3">
        <p className="text-[#1615158e] text-xs font-bold tracking-wider ">
          ISP
        </p>
        <h3 className="font-bold text-2xl max-w-[50%]">{isp}</h3>
      </div>
    </div>
  );
}

export default Details;
