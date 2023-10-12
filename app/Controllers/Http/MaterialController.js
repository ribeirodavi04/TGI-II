const Material = use('App/Models/Material');

class MaterialController {

  async index({ response }) {
    const materials = await Material.all();
    return response.json(materials);
  }

  async show({ params, response }) {
    const material = await Material.find(params.id);
    return response.json(material);
  }

  async store({ request, response }) {
    const data = request.only(['nome', 'tipo', 'descricao', 'preco_unitario']);
    const novoMaterial = new Material();
    novoMaterial.fill(data);

    try {
      await novoMaterial.save();
      return response.status(201).json(novoMaterial);
    } catch (error) {
      console.log(error);
      return response.status(500).json({ error: 'Erro ao inserir material.' });
    }
  }

  async update({ params, request, response }) {
    const material = await Material.find(params.id);
    const data = request.only(['nome', 'tipo', 'descricao', 'preco_unitario']);
    material.merge(data);

    try {
      await material.save();
      return response.json(material);
    } catch (error) {
      return response.status(500).json({ error: 'Erro ao atualizar material.' });
    }
  }

  async destroy({ params, response }) {
    const material = await Material.find(params.id);

    try {
      await material.delete();
      return response.status(204).send();
    } catch (error) {
      return response.status(500).json({ error: 'Erro ao excluir material.' });
    }
  }
}

module.exports = MaterialController;
