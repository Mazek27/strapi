export default {
  routes: [
    {
      method: 'GET',
      path: '/gallery-page',
      handler: 'gallery-page.find',
      config: {
        policies: [],
      },
    },
    {
      method: 'GET',
      path: '/gallery-page/:id',
      handler: 'gallery-page.findOne',
      config: {
        policies: [],
      },
    }
  ]
}
