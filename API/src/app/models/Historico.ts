import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('historico')
class Historico {
  @PrimaryGeneratedColumn('increment')
  id: String;

  @Column()
  users_id: number;

  @Column()
  descricao: string;

  @Column()
  embalagem: string;

  @CreateDateColumn({ type: 'datetime' })
  created_at: Date;
  
  @Column()
  operacao: string;

  @Column()
  quantidade: number;

  @Column()
  responsavel: string;

  @Column()
  produto_id: number;
}

export default Historico;
