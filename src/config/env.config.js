const { VITE_BASE_URL, VITE_DAILY_VAR } = import.meta.env;
console.log("daily", VITE_DAILY_VAR);

const config = {
  baseUrl: String(VITE_BASE_URL),
  dailyVar: JSON.parse(VITE_DAILY_VAR)
};

export default config;
