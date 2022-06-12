import { CreditCard } from './credit-card.interface';
export interface Response {
    data:    CreditCard[];
    message: string;
    status:  string;
}