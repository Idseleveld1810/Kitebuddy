exports.handler = async function(event, context) {
  const spotId = event.queryStringParameters.id || "48441";
  const fetch = require("node-fetch");
  const url = `https://www.windguru.cz/int/iapi.php?q=spotForecast&id_spot=${spotId}&lang=nl`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Windguru fetch failed", details: error.message })
    };
  }
};
