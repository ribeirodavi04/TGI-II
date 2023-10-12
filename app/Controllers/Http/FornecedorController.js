const Fornecedor = use('App/Models/Fornecedor');

class FornecedorController {
    async index({ response }) {
        const fornecedores = await Fornecedor.all();
        return response.json(fornecedores);
    }

    async show({ params, response }) {
        const fornecedor = await Fornecedor.find(params.id);
        return response.json(fornecedor);
    }

    async store({ request, response }) {
        const data = request.only(['nome', 'email', 'telefone', 'cnpj', 'endereco', 'observacoes']);
        const novoFornecedor = new Fornecedor();
        novoFornecedor.fill(data);
        try {
            await novoFornecedor.save();
            return response.status(201).json(novoFornecedor);
        } catch (error) {
            console.log(error);
            return response.status(500).json({ error: 'Erro ao inserir fornecedor.' });
        }
    }

    async update({ params, request, response }) {
        const fornecedor = await Fornecedor.find(params.id);
        const data = request.only(['nome',  'email', 'telefone', 'cnpj','endereco', 'observacoes']);
        fornecedor.merge(data);

        try {
            await fornecedor.save();
            return response.json(fornecedor);
        } catch (error) {
            return response.status(500).json({ error: 'Erro ao atualizar fornecedor.' });
        }
    }

    async destroy({ params, response }) {
        const fornecedor = await Fornecedor.find(params.id);

        try {
            await fornecedor.delete();
            return response.status(204).send();
        } catch (error) {
            return response.status(500).json({ error: 'Erro ao excluir fornecedor.' });
        }
    }
}

module.exports = FornecedorController;
