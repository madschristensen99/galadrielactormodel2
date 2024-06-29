// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  routeRules: {
    // prerender index route by default
    '/': { prerender: true },
  },
});
export default {
  head: {
    script: [
      { src: 'https://cdn.ethers.io/lib/ethers-5.2.esm.min.js', type: 'module' }
    ],
    __dangerouslyDisableSanitizers: ['script'],
  },
}
