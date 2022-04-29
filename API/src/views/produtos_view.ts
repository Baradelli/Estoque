import Produto from '../app/models/Produtos';
import imagesView from './images_view';

export default {
    render(produto: Produto) {
        return{
            id: produto.id,
            users_id: produto.users_id,
            codigo: produto.codigo,
            descricao: produto.descricao,
            embalagem: produto.embalagem,
            codigo_de_barras: produto.codigo_de_barras,
            quantidade: produto.quantidade,
            images: imagesView.renderMany(produto.images)
        };
    },

    renderMany(produtos: Produto[]) {
        return produtos.map(produto => this.render(produto));
    }
};
