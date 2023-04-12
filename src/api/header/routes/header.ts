
export default {
  routes: [
    {
      method: 'GET',
      path: '/header/:id',
      handler: 'header.findOne',
      config: {
        policies: [],
      },
    }
  ]
}
