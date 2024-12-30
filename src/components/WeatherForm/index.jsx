import { useCallback, useEffect, useMemo, useState } from "react";
import { fetchData } from "../../services/weatherService";
import { useNavigate } from "react-router-dom";
import useNavigator from "../../hooks/useNavigator";

function WeatherForm() {
  const [error, currLatitude, currLongitude] = useNavigator();

  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setLatitude(currLatitude);
    setLongitude(currLongitude);
  }, [error, currLatitude, currLongitude]);

  const handleOnSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      if (!(latitude && longitude && startDate && endDate)) return;

      const data = {
        latitude,
        longitude,
        startDate,
        endDate,
      };
      // console.log("Data: ", data);
      setLoading(true);
      await fetchData(data, navigate);
      setLoading(false);
    },
    [latitude, longitude, startDate, endDate, navigate]
  );

  const maxDate = useMemo(() => {
    const date = new Date();
    const yyyy = date.getFullYear();
    const mm = date.getMonth() + 1;
    const dd = date.getDate() - 1;

    return `${yyyy}-${mm}-${dd}`;
  }, []);

  return (
    <div className="">
      <div>
        <h1 className="text-center text-2xl font-bold py-4 bg-green-400 text-white">
          Weather Dashboard
        </h1>

        {error && (
          <div className="py-3 m-2 rounded-md bg-yellow-200">
            <p className="text-center text-orange-400 text-xl">
              {error.message}
            </p>
          </div>
        )}
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 flex justify-center items-center">
          <form
            onSubmit={handleOnSubmit}
            className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
          >
            <label htmlFor="lat" className="">
              Latitude:
            </label>
            <input
              className="border-2"
              type="number"
              id="lat"
              value={latitude}
              placeholder="Enter valid Latitude"
              onChange={(e) => setLatitude(Number(e.target.value).toFixed(2))}
            />

            <label htmlFor="long" className="">
              Longitude:
            </label>
            <input
              className="border-2"
              type="number"
              id="long"
              value={longitude}
              placeholder="Enter valid Longitude"
              onChange={(e) => setLongitude(Number(e.target.value).toFixed(2))}
            />

            <label htmlFor="start_date" className="">
              Start Date:{" "}
            </label>
            <input
              className="border-2  "
              type="date"
              id="start_date"
              value={startDate}
              placeholder="Choose start date"
              onChange={(e) => setStartDate(e.target.value)}
              max={maxDate}
            />

            <label htmlFor="end_date" className="">
              End Date:{" "}
            </label>
            <input
              className="border-2"
              type="date"
              id="end_date"
              value={endDate}
              placeholder="Choose end date"
              onChange={(e) => setEndDate(e.target.value)}
              max={maxDate}
            />

            <button
              className="rounded-sm bg-blue-600 py-2 mt-4  hover:bg-blue-900 w-full text-white disabled:bg-gray-500 disabled:hover:bg-none"
              type="submit"
              disabled={loading}
            >
              {loading ? "Searching" : "Search"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default WeatherForm;
