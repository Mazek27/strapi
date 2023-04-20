export default {
  routes: [
    {
      method: 'GET',
      path: '/tech-page',
      handler: 'tech-page.find',
      config: {
        policies: [],
      },
    },
    {
      method: 'GET',
      path: '/tech-page/:id',
      handler: 'tech-page.findOne',
      config: {
        policies: [],
      },
    }
  ]
}
