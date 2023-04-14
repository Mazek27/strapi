export default {
  routes: [
    {
      method: 'GET',
      path: '/food-and-drink-page',
      handler: 'food-and-drink-page.find',
      config: {
        policies: [],
      },
    },
    {
      method: 'GET',
      path: '/food-and-drink-page/:id',
      handler: 'food-and-drink-page.findOne',
      config: {
        policies: [],
      },
    }
  ]
}
