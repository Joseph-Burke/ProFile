export class Controller {
  constructor(model) {
    this.model = model;
    this.index = async (req, res) => {
      res.send(await this.model.findAll());
    };
    this.show = async (req, res) => {
      const { id } = req.params;
      res.send(await this.model.findByPk(id));
    };
    this.create = async (req, res) => {
      const params = req.query;
      const newInstance = await this.model.create(params);
      res.send(newInstance);
    };
    this.update = async (req, res) => {
      const { id } = req.params;
      const instance = await this.model.findByPk(id);
      const params = req.query;
      Object.keys(params).forEach((key) => {
        instance[key] = params[key];
      });
      await instance.save();
      res.send(await this.model.findByPk(id));
    };
    this.destroy = async (req, res) => {
      const { id } = req.params;
      const instance = await this.model.findByPk(id);

      await instance.destroy();

      res.send();
    };
  }
}
