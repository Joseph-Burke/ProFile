export const addresses = [ 'address1', 'address2', 'address3' ];

export const addressesController = {
  index(req, res) {
    res.send(addresses);
  },
  show(req, res) {
    res.send(req.params.id);
  },
  create(req, res) {
    res.send('create a new address');
  },
  update(req, res) {
    res.send(`update address with id ${req.params.id}`);
  },
  destroy(req, res) {
    res.send(`delete address with id ${req.params.id}`);
  },
};
