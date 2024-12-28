import { useCallback, useState } from "react";
import { fetchData, fetchData2 } from "../../services/weatherService";
import { useNavigate } from "react-router-dom";

function WeatherForm() {
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const navigate = useNavigate();

  const handleOnSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const data = {
        latitude,
        longitude,
        startDate,
        endDate,
      };

      console.log("Data: ", data);
      fetchData(data);
      // fetchData2(data)
      // navigate("/dashboard");
    },
    [latitude, longitude, startDate, endDate]
  );

  return (
    <div className="">
      <div>
        <div>
          <h1 className="text-center text-2xl font-bold py-4 bg-green-400 text-white">
            Weather Dashboard
          </h1>
        </div>
        <form
          onSubmit={handleOnSubmit}
          className="flex justify-start items-start gap-2 mt-2 w-full"
        >
          <div>
            <label htmlFor="lat" className="m-4">
              Latitude:
            </label>
            <input
              className="border-2"
              type="number"
              id="lat"
              value={latitude}
              placeholder="Enter valid Latitude"
              onChange={(e) => setLatitude(Number(e.target.value))}
            />
          </div>

          <div>
            <label htmlFor="long" className="m-4">
              Longitude:
            </label>
            <input
              className="border-2"
              type="number"
              id="long"
              value={longitude}
              placeholder="Enter valid Longitude"
              onChange={(e) => setLongitude(Number(e.target.value))}
            />
          </div>

          <div>
            <label htmlFor="start_date" className="m-4">
              Start Date:{" "}
            </label>
            <input
              className="border-2  "
              type="date"
              id="start_date"
              value={startDate}
              placeholder="Choose start date"
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="end_date" className="m-4">
              End Date:{" "}
            </label>
            <input
              className="border-2"
              type="date"
              id="end_date"
              value={endDate}
              placeholder="Choose end date"
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>

          <div>
            <button
              className="border-2 text-white font-bold rounded-lg bg-blue-700 px-10 ml-2  hover:bg-blue-900"
              type="submit"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default WeatherForm;
