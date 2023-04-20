export default {
  routes: [
    {
      method: 'GET',
      path: '/room-pages',
      handler: 'room-page.find',
      config: {
        policies: [],
      },
    },
    {
      method: 'GET',
      path: '/room-pages/:id',
      handler: 'room-page.findOne',
      config: {
        policies: [],
      },
    }
  ]
}
