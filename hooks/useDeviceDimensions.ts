import { useState, useEffect } from "react";
import { Dimensions } from "react-native";

function useDeviceDimensions(): {
  deviceWidth: number;
  deviceHeight: number;
} {
  const [availableDeviceWidth, setAvailableDeviceWidth] = useState(
    Dimensions.get("window").width
  );
  const [availableDeviceHeight, setAvailableDeviceHeight] = useState(
    Dimensions.get("window").height
  );

  useEffect(() => {
    const updateDimensions = () => {
      setAvailableDeviceWidth(Dimensions.get("window").width);
      setAvailableDeviceHeight(Dimensions.get("window").height);
    };

    Dimensions.addEventListener("change", updateDimensions);

    return () => {
      Dimensions.removeEventListener("change", updateDimensions);
    };
  });

  return {
    deviceWidth: availableDeviceWidth,
    deviceHeight: availableDeviceHeight,
  };
}

export default useDeviceDimensions;