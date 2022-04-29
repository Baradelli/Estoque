import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateHistoricoTable1639485779088 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'historico',
      columns: [
        {
          name: 'id',
          type: 'integer',
          unsigned: true,
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'produto_id',
          type: 'integer'
        },
        {
          name: 'users_id',
          type: 'integer',
        },
        {
          name: 'descricao',
          type: 'string',
          length: '60',
        },
        {
          name: 'embalagem',
          type: 'string',
          length: '10',
        },
        {
          name: 'created_at',
          type: 'datetime',
          default: 'now()',
        },
        {
          name: 'operacao',
          type: 'string',
          enum: ['+', '-']
        },
        {
          name: 'quantidade',
          type: 'integer',
        },
        {
          name: 'responsavel',
          type: 'string',
        },
      ],
      foreignKeys: [
        {
          name: 'users_id',
          columnNames: ['users_id'],
          referencedTableName: 'users',
          referencedColumnNames: ['id'],
        },
        {
          name: 'produto_id',
          columnNames: ['produto_id'],
          referencedTableName: 'produtos',
          referencedColumnNames: ['id'],
        },
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('historico');
  }

}
