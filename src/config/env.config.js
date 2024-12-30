const { VITE_BASE_URL } = import.meta.env;

const config = {
  baseUrl: String(VITE_BASE_URL),
  dailyVar: ["temperature_2m_max","temperature_2m_min","temperature_2m_mean","apparent_temperature_max","apparent_temperature_min","apparent_temperature_mean"]
};

export default config;
