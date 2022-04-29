import Historico from '../app/models/Historico';

export default {
    render(historico: Historico) {
        return {
            id: historico.id,
            users_id: historico.users_id,
            produto_id: historico.produto_id,
            descricao: historico.descricao,
            embalagem: historico.embalagem,
            data: historico.data,
            hora: historico.hora,
            soma: historico.soma,
            quantidade: historico.quantidade,
            responsavel: historico.responsavel,
            update: historico.update,
        };
    },
    
    renderMany(historico: Historico[]) {
        return historico.map(historico => this.render(historico))
    }
}