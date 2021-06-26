export const users = [ 'user1', 'user2', 'user3' ];

export const usersController = {
  index(req, res) {
    res.send(users);
  },
  show(req, res) {
    res.send(req.params.id);
  },
  create(req, res) {
    res.send('create a new user');
  },
  update(req, res) {
    res.send(`update user with id ${req.params.id}`);
  },
  destroy(req, res) {
    res.send(`delete user with id ${req.params.id}`);
  },
};
