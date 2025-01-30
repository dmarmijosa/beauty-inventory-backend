import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Group extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  userId: string;

  @Prop()
  productIds: string[];

  @Prop()
  categoryIds: string[];
}

export const GroupSchema = SchemaFactory.createForClass(Group);
