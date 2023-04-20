export default {
  routes: [
    {
      method: 'GET',
      path: '/home',
      handler: 'home.find',
      config: {
        policies: [],
      },
    },
    {
      method: 'GET',
      path: '/home/:id',
      handler: 'home.findOne',
      config: {
        policies: [],
      },
    }
  ]
}
