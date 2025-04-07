const iconMap = {
    "200": "wi-thunderstorm",
    "201": "wi-thunderstorm",
    "202": "wi-thunderstorm",
    "210": "wi-lightning",
    "211": "wi-lightning",
    "212": "wi-lightning",
    "221": "wi-lightning",
    "230": "wi-thunderstorm",
    "231": "wi-thunderstorm",
    "232": "wi-thunderstorm",
    "300": "wi-sprinkle",
    "301": "wi-sprinkle",
    "302": "wi-rain",
    "310": "wi-rain-mix",
    "311": "wi-rain",
    "312": "wi-rain",
    "313": "wi-showers",
    "314": "wi-rain",
    "321": "wi-sprinkle",
    "500": "wi-sprinkle",
    "501": "wi-rain",
    "502": "wi-rain",
    "503": "wi-rain",
    "504": "wi-rain",
    "511": "wi-rain-mix",
    "520": "wi-showers",
    "521": "wi-showers",
    "522": "wi-showers",
    "531": "wi-storm-showers",
    "600": "wi-snow",
    "601": "wi-snow",
    "602": "wi-sleet",
    "611": "wi-rain-mix",
    "612": "wi-rain-mix",
    "615": "wi-rain-mix",
    "616": "wi-rain-mix",
    "620": "wi-rain-mix",
    "621": "wi-snow",
    "622": "wi-snow",
    "701": "wi-fog",
    "711": "wi-smoke",
    "721": "wi-day-haze",
    "731": "wi-dust",
    "741": "wi-fog",
    "761": "wi-dust",
    "762": "wi-dust",
    "771": "wi-cloudy-gusts",
    "781": "wi-tornado",
    "800": "wi-day-sunny",
    "801": "wi-cloud",
    "802": "wi-cloud",
    "803": "wi-cloudy",
    "804": "wi-cloudy",
    "900": "wi-tornado",
    "901": "wi-storm-showers",
    "902": "wi-hurricane",
    "903": "wi-snowflake-cold",
    "904": "wi-hot",
    "905": "wi-windy",
    "906": "wi-hail",
    "957": "wi-strong-wind"
  };
  
  export const getWeatherIconClass = (code, isDaytime) => {
    const base = iconMap[code];
  
    // If no icon found, return fallback
    if (!base) return "wi-na";
  
    // Enhance with day/night prefix if possible
    if (base.startsWith("wi-day") || base.startsWith("wi-night")) {
      return base;
    }
  
    return isDaytime ? base.replace("wi-", "wi-day-") : base.replace("wi-", "wi-night-");
  };
  