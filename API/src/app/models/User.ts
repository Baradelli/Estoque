import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, OneToMany } from 'typeorm';
import bcrypt from 'bcryptjs';
import Produtos from './Produtos'

@Entity('users')
class User {
    @PrimaryGeneratedColumn('increment')
    id: String;

    @Column()
    nome: string;
    
    @Column()
    email: string;

    @Column()
    password: string;
 
    /* @beforeUpdate() */
    @BeforeInsert()   
    hashPassword() {
        this.password = bcrypt.hashSync(this.password, 8);
    }    
}

export default User;