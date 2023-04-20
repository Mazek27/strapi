export default {
  routes: [
    {
      method: 'GET',
      path: '/celebrations-page',
      handler: 'celebrations-page.find',
      config: {
        policies: [],
      },
    },
    {
      method: 'GET',
      path: '/celebrations-page/:id',
      handler: 'celebrations-page.findOne',
      config: {
        policies: [],
      },
    }
  ]
}
