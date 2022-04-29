import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn } from 'typeorm';
import Image from './Images'
import User from './User'

@Entity('produtos')
class Produto {
    @PrimaryGeneratedColumn('increment')
    id: String;

    @Column()
    users_id: number;

    @Column()
    codigo: number;

    @Column()
    descricao: string;
 
    @Column()
    embalagem: string;

    @Column()
    codigo_de_barras: string;

    @Column()
    quantidade: number;

    @OneToMany(() => Image, image => image.produto, {
        cascade:['insert', 'update']
    }) // este campo não é obrigarório sem ele sera usado o camel case
    images: Image[];

    // @ManyToOne(() => User, user => user.id)
    // users_id: number;
}

export default Produto;
