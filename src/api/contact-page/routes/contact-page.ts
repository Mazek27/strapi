export default {
  routes: [
    {
      method: 'GET',
      path: '/contact-page',
      handler: 'contact-page.find',
      config: {
        policies: [],
      },
    },
    {
      method: 'GET',
      path: '/contact-page/:id',
      handler: 'contact-page.findOne',
      config: {
        policies: [],
      },
    }
  ]
}
