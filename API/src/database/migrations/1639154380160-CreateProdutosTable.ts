import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProdutosTable1639154380160 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'produtos',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'users_id',
                    type: 'integer',
                },
                {
                    name: 'codigo',
                    type: 'integer',
                    length: '5',
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
                    name: 'codigo_de_barras',
                    type: 'string',
                    length: '13',
                    isNullable: true,
                    default: null,
                },
                {
                    name: 'quantidade',
                    type: 'integer',
                    default: 1,
                },
            ],

            // foreignKeys: [
            //     {
            //         name: 'users_id',
            //         columnNames: ['users_id'],
            //         referencedTableName: 'users',
            //         referencedColumnNames: ['id'],
            //     }
            // ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('produtos');
    }
}
