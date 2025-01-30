import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Order extends Document {
  @Prop({ required: true })
  productId: string;

  @Prop({ required: true })
  userId: string;

  @Prop({
    enum: ['pedido', 'rechazado', 'completado', 'otros'],
    default: 'pedido',
  })
  status: string;

  @Prop()
  customerName: string;

  @Prop()
  customerAddress: string;

  @Prop()
  customerPhone: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
