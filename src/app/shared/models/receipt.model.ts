import { CartItem } from "./Cart.model";
import { UserModel } from "./User.model";

export interface ReceiptModel {
  id?: string;
  cart?: CartItem[];
  userInfo?: UserModel;
  paymentType?: string;
}
