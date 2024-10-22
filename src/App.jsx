// import
import { useState, useEffect } from "react";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Details from "./components/Details";

// const API = "at_8ftFAGTO0jvqQarpl023HczXKf9Xk";

function App() {
  const [ipAddress, setIpAddress] = useState("");
  const [isp, setIsp] = useState("");
  const [location, setLocation] = useState("");
  const [timezone, setTimezone] = useState("");

  // States needed
  // isp
  // location
  // timezone
  // ipAddress

  // useEffect(() => {
  //   // Function to get the user's location
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         const { latitude, longitude } = position.coords;
  //         setLocation({ latitude, longitude }); // Update state with coordinates
  //       },
  //       (error) => {
  //         setError("Error retrieving location: " + error.message); // Handle error
  //       }
  //     );
  //   } else {
  //     setError("Geolocation is not supported by this browser.");
  //   }
  // }, []); // Empty dependency array ensures it runs once on component mount

  const position = [39.831432958885664, -86.27218617386298];

  useEffect(() => {
    const url = `https://geo.ipify.org/api/v2/country?apiKey=at_8ftFAGTO0jvqQarpl023HczXKf9Xk&ipAddress=${ipAddress}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setIsp(data.isp);
        setTimezone(data.location.timezone);
        setLocation(`${data.location.region}, ${data.location.country}`);
      });
  }, [ipAddress]);

  return (
    <div className="font-main w-full h-screen relative ">
      <div className="w-full h -[30%] bg-mobile lg:bg-desk bg-cover bg-center pt-10 space-y-5 ">
        <h1 className="text-center text-white text-lg lg:text-2xl font-semibold ">
          IP Address Tracker
        </h1>

        <form
          action=""
          className="w-[80%] lg:w-[40%] h-12 lg:h-14 mx-auto rounded-2xl overflow-hidden relative"
        >
          <input
            type="text"
            placeholder="Search for any IP address or domain"
            className="w-full h-full px-5  "
            value={ipAddress}
            onChange={(e) => setIpAddress(e.target.value)}
          />
          <button className="w-20 h-full bg-black hover:bg-[#2b2b2b] flex items-center justify-center absolute right-0 top-0">
            <img src="icon-arrow.svg" alt="" />
          </button>
        </form>
      </div>

      {/* Details components */}
      <div className="absolute w-[80%] lg:w-[80%]  h-[400px] lg:h-[170px] left-0 right-0 top-[24%] mx-auto overflow-hidden rounded-xl shadow-sm shadow-gray-200 z-[999] ">
        <Details
          isp={isp}
          ipAddress={ipAddress}
          timezone={timezone}
          location={location}
        />
      </div>

      {/* Map components */}
      <div id="map" className="w-full h-[70%]">
        <MapContainer
          center={position}
          zoom={13}
          scrollWheelZoom={false}
          className="w-full h-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default App;
