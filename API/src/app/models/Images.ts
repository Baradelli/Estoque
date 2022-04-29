import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm'
import Produto from './Produtos'

@Entity('images')
class Image {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    path: string;

    @ManyToOne(() => Produto, produto => produto.images)
    @JoinColumn({name: 'produtos_id'})
    produto: Produto | number;
}

export default Image
