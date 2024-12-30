import { useState, useEffect, useCallback, useMemo } from "react";

const useNavigator = () => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [error, setError] = useState(null);

  const onSuccess = useCallback((position) => {
    setLatitude(Number(position.coords.latitude).toFixed(2));
    setLongitude(Number(position.coords.longitude).toFixed(2));
  }, []);

  const onError = useCallback((error) => {
    setError(error);
  }, []);

  const options = useMemo(() => {
    return {
      enableHighAccuracy: true,
    };
  }, []);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
  }, [onSuccess, onError, options]);

  return [error, latitude, longitude];
};
export default useNavigator;
