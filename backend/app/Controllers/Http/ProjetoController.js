'use strict'

const Projeto = use('App/Models/Projeto');
const Helpers = use('Helpers');
const ImagemProjeto = use('App/Models/ImagemProjeto');
const DocumentoProjeto = use('App/Models/DocumentoProjeto');
const fs = use('fs');
const Env = use('Env');

class ProjetoController {
    async index({ response }) {
        const projetos = await Projeto.query()
            .with('cliente')
            .with('etapasProjeto')
            .orderBy('created_at', 'desc')
            .fetch();
        return response.json(projetos);
    }

    async show({ params, response }) {
        const projeto = await Projeto.query()
            .with('orcamentoMateriaisProjeto')
            .with('orcamentosProjeto')
            .with('documentosProjeto')
            .with('imagensProjeto')
            .with('etapasProjeto')
            .with('cliente')
            .with('usuario')
            .where('id_projeto', params.id)
            .firstOrFail();

        return response.json(projeto);
    }

    async store({ request, response }) {
        const data = request.only(['id_cliente', 'id_usuario_responsavel', 'nome', 'endereco', 'tipo', 'descricao', 'data_inicio', 'data_final']);
        const novoProjeto = new Projeto();
        novoProjeto.fill(data);

        try {
            await novoProjeto.save();
            return response.status(201).json(novoProjeto);
        } catch (error) {
            console.log(error);
            return response.status(500).json({ error: 'Erro ao inserir projeto.' });
        }
    }

    async update({ params, request, response }) {
        const projeto = await Projeto.find(params.id);
        const data = request.only(['id_cliente', 'id_usuario_responsavel', 'nome', 'endereco', 'tipo', 'descricao', 'data_inicio', 'data_final']);
        projeto.merge(data);

        try {
            await projeto.save();
            return response.json(projeto);
        } catch (error) {
            return response.status(500).json({ error: 'Erro ao atualizar projeto.' });
        }
    }

    async destroy({ params, response }) {
        const projeto = await Projeto.find(params.id);

        try {
            await projeto.delete();
            return response.status(204).send();
        } catch (error) {
            return response.status(500).json({ error: 'Erro ao excluir projeto.' });
        }
    }

    async showAllInfo({ params, response }) {
        const projeto = await Projeto.query()
            .with('orcamentoMateriaisProjeto')
            .with('orcamentosProjeto')
            .with('documentosProjeto')
            .with('imagensProjeto')
            .with('etapasProjeto')
            .with('cliente')
            .with('usuario')
            .where('id_projeto', params.id)
            .first();

        if (!projeto) {
            return response.status(404).json({ error: 'Projeto não encontrado' });
        }

        return response.json(projeto);
    }

    criarPastaParaProjeto(projetoId) {
        const pastaDoProjeto = Helpers.publicPath(`uploads/projetos/projeto_${projetoId}`);

        // Verifique se a pasta já existe
        if (!fs.existsSync(pastaDoProjeto)) {
            // Se não existir, crie a pasta
            fs.mkdirSync(pastaDoProjeto);
        }

        return pastaDoProjeto;
    }

    async uploadImagem({ params, request, response }) {
        const projetoId = params.id;
        const pastaDoProjeto = this.criarPastaParaProjeto(projetoId);

        const imagem = request.file('imagem', {
            types: ['image'],
            size: '2mb',
        });

        if (!imagem) {
            return response.status(400).json({ error: 'Imagem não fornecida' });
        }

        // Salve a imagem na pasta específica do projeto
        await imagem.move(pastaDoProjeto + '/imagens/', {
            name: `projeto_${projetoId}_imagem_${new Date().getTime()}.${imagem.extname}`,
            overwrite: true,
        });

        if (!imagem.moved()) {
            return response.status(500).json({ error: 'Erro ao salvar a imagem' });
        }

        // Crie um registro na tabela ImagemProjeto
        const imagemProjeto = new ImagemProjeto();
        imagemProjeto.id_projeto = projetoId;
        imagemProjeto.nome = imagem.fileName;
        imagemProjeto.tipo = request.input('tipo');
        imagemProjeto.observacoes = request.input('observacoes');
        imagemProjeto.url = `${Env.get('APP_URL')}/uploads/projetos/projeto_${projetoId}/imagens/${imagem.fileName}`;

        await imagemProjeto.save();

        return response.status(201).json(imagemProjeto);
    }

    async uploadDocumento({ params, request, response }) {
        const projetoId = params.id;
        const pastaDoProjeto = this.criarPastaParaProjeto(projetoId);

        const documento = request.file('documento', {
            types: ['pdf', 'doc', 'docx'],
            size: '10mb',
        });

        if (!documento) {
            return response.status(400).json({ error: 'Documento não fornecido' });
        }

        // Salve o documento na pasta específica do projeto
        await documento.move(pastaDoProjeto + '/documentos/', {
            name: `projeto_${projetoId}_documento_${new Date().getTime()}.${documento.extname}`,
            overwrite: true,
        });

        if (!documento.moved()) {
            return response.status(500).json({ error: 'Erro ao salvar o documento' });
        }

        // Crie um registro na tabela DocumentoProjeto
        const documentoProjeto = new DocumentoProjeto();
        documentoProjeto.id_projeto = projetoId;
        documentoProjeto.nome = documento.fileName;
        documentoProjeto.tipo = request.input('tipo');
        documentoProjeto.observacoes = request.input('observacoes');
        documentoProjeto.url = `${Env.get('APP_URL')}/uploads/projetos/projeto_${projetoId}/documentos/${documento.fileName}`;

        await documentoProjeto.save();

        return response.status(201).json(documentoProjeto);
    }



}

module.exports = ProjetoController
