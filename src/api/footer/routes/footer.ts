
export default {
  routes: [
    {
      method: 'GET',
      path: '/footer/:id',
      handler: 'footer.findOne',
      config: {
        policies: [],
      },
    }
  ]
}
