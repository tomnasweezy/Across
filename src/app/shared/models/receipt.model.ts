import { CartItem } from "./Cart.model";
import { UserModel } from "./User.model";

export class ReceiptModel {
  id?: string;
  cart?: CartItem[];
  userInfo?: UserModel;
  paymentType?: string;
}
