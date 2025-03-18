module.exports = {
  apps : [{
    name   : "web",
    script : "yarn start -p 8080",
    env_production: {
      WORDPRESS_API_URL: "https://admin.caisbyor.com.br/index.php?graphql",
      WORDPRESS_URL: "https://admin.caisbyor.com.br",
      NODE_ENV: "production",
      AUTH_SECRET: "INFINITYWEB",
      PORT: 8080
    }
  }]
}
