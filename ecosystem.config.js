module.exports = {
  apps: [
    {
      script: "dist/index.js",
      watch: ".",
    },
  ],

  deploy: {
    production: {
      user: "root ",
      host: "178.79.184.211",
      ref: "origin/master",
      repo: "git@github.com:tomnasweezy/across.git",
      path: "$HOME/across-client",
      "pre-deploy-local": "",
      "post-deploy": "npm install",
      "pre-setup": "",
    },
  },
};
