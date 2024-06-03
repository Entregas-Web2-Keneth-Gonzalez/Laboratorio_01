import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Producto{
    @PrimaryGeneratedColumn()
    Cedula: number;

    @Column({type: 'varchar', length:50, nullable: false})
    Nombre: string;

    @Column({type: 'varchar', length:50, nullable: false})
    Apellido1: string;

    @Column({type: 'varchar', length:50, nullable: false})
    Apellido2: string;

    @Column({type: 'date', nullable: false})
    FechaNacimiento: string;

    @Column({type: 'enum', enum: ['M', 'G', 'I'], default: 'I', nullable: false})
    Genero: 'M' | 'G' | 'I';

    @Column({type: 'boolean', default: true})
    Estado: boolean;
}