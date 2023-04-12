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
      path: '/room-pages/findByPlaceAndRoomId',
      handler: 'room-page.findOneByPlaceAndRoomId',
      config: {
        policies: [],
      },
    }
  ]
}
