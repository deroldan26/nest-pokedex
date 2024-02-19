import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()   //Le dice a la BD las caracteristicas de las tablas
export class Pokemon extends Document{
    @Prop({
        unique: true,
        index: true,
    })
    name: string;

    @Prop({
        unique: true,
        index: true,
    })
    no: number;
}

export const PokemonSchema = SchemaFactory.createForClass(Pokemon);