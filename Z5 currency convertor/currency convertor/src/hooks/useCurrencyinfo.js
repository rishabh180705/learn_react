import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  
  useEffect(() => {
    // Fetch exchange rates for the specified currency
    fetch(`https://v6.exchangerate-api.com/v6/12153b1df3fd57a43c30323c/latest/${currency}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res.conversion_rates); // Use conversion_rates from the response
      })
      .catch((error) => {
        console.error("Error fetching currency data:", error);
      });
  }, [currency]);

  // Log updated data when it's fetched and set
  useEffect(() => {
    console.log("Updated data:", data);
  }, [data]);

  return data;
}

export default useCurrencyInfo;
