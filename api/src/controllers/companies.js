
const companies = [
  'company1',
  'company2',
  'company3'
]

export const companiesController = {
  index(req, res) { res.send(companies) },
  show(req, res) { res.send(req.params.id) },
  create(req, res) { res.send('create a new company') },
  update(req, res) { res.send(`update company with id ${req.params.id}`) },
  destroy(req, res) { res.send(`delete company with id ${req.params.id}`) }
};
