const devConfig = {
  apiUrl: "", // Already using proxy url in package.json
};

const prodConfig = {
  apiUrl: "https://api.gamewatch.jctiru.com",
};

const config = process.env.NODE_ENV === "development" ? devConfig : prodConfig;

export default config;
