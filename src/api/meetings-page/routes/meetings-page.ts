export default {
  routes: [
    {
      method: 'GET',
      path: '/meetings-page',
      handler: 'meetings-page.find',
      config: {
        policies: [],
      },
    },
    {
      method: 'GET',
      path: '/meetings-page/:id',
      handler: 'meetings-page.findOne',
      config: {
        policies: [],
      },
    }
  ]
}
