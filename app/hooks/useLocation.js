import { useState, useEffect } from "react";
import * as Location from "expo-location";

export default useLocation = () => {
  const [location, setLocation] = useState();

  const getPosition = async () => {
    try {
      const { granted } = await Location.requestPermissionsAsync();
      if (granted) {
        const result = await Location.getLastKnownPositionAsync();
        setLocation(result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosition();
  }, []);

  return location;
};
