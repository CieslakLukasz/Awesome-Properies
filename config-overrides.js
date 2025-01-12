// config-overrides.js
module.exports = function override(config, env) {
  // Dodanie obsługi LESS do Webpacka
  const lessRule = {
    test: /\.less$/,
    use: [
      {
        loader: "style-loader", // Zapisz style do DOM
      },
      {
        loader: "css-loader", // Przetwórz CSS
      },
      {
        loader: "less-loader", // Przetwórz LESS do CSS
        options: {
          lessOptions: {
            modifyVars: {
              // Możesz dodać zmienne LESS tutaj (np. dla kolorów)
            },
            javascriptEnabled: true, // Włącz wsparcie dla JavaScriptu w LESS
          },
        },
      },
    ],
  };

  // Znajdź i zastąp istniejącą regułę dla LESS
  const rules = config.module.rules;
  rules.push(lessRule);

  return config;
};
