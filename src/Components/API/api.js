const COVID19 = "https://api.covid19api.com/summary";

export const getCovidData = async () => {
  const req = await fetch(COVID19);
  if (!req.ok) {
    throw new Error("Error While Fetching Data");
  }
  const res = await req.json();
  const indianData = res.Countries.filter(item => item.Country === "India")
  return {india: indianData, global: res.Global}
};
