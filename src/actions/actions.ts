'use server'

export const fetchVehicleType = async () => {
  try {
    const res = await fetch(
      "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json"
    );
    const data = res.json();
    return data;
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
};

// Get Models for Make and a combination of Year and Vehicle Type
// https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeYear/make/honda/modelyear/2015?format=csv
export const fetchModelsByMakeAndYear = async () => {
  try {
    const res = await fetch(
      "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?fromDate=1/1/2015&toDate=1/1/2024&format=json"
    );
    const data = res.json();
    return data;
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
};