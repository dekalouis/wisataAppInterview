const airportByCountry = require("./airportByCountry.json");
const airportByICAO = require("./airportByICAOCode.json");

//1
const airportArray = Object.values(airportByICAO);
// console.log(airportArray);

//2
const groupByTimeZone = airportArray.reduce((acc, airport) => {
  let tz = airport.tz;
  if (!acc[tz]) acc[tz] = [];

  acc[tz].push(airport);
  return acc;
});

//{"Amercia/Denver": [{airport 1}, {airport 2}]}

// console.log(groupByTimeZone["America/Denver"]);

//3.
const commercialAirports = airportArray.filter((ap) => ap.iata);

const finalAirports = commercialAirports.map((ap) => ({
  iata_code: ap.iata, // e.g. "CGK"
  active: ap.active,
  name: ap.name,
  city: ap.city,
  state: ap.state,
  country: ap.country,
  elevation: ap.elevation,
  latitude: ap.lat,
  longitude: ap.lon,
  tz: ap.tz, // e.g. "Asia/Jakarta"
  tz_offset: ap.tz_offset, // e.g. 7.0 for "Asia/Jakarta" (GMT+7)
}));

// console.log(commercialAirports);
console.log(finalAirports);
