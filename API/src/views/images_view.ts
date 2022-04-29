import Image from '../app/models/Images';

export default {
    render(image: Image) {
        return{
            id: image.id,
            url: `http://192.168.1.61:3001/uploads/${image.path}`
        };
    },

    renderMany(images: Image[]) {
        return images.map(image => this.render(image));
    }
};
