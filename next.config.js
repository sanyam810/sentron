// next.config.js

module.exports = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/home', // Replace 'home' with your actual route path
          permanent: false, // Set this to true if you want a permanent (301) redirect
        },
      ];
    },
  };
  