import { Owner } from './owner.interface';
import { Franchise } from './franchise.interface';
import { Type } from './type.interface';

export interface CreditCard {
    id:               string;
    idOwner:          string;
    owner:            Owner;
    idFranchise:      string;
    franchise:        Franchise;
    idType:           string;
    type:             Type;
    number:           string;
    expirationYear:   string;
    expirationMonth:  string;
    cvc:              string;
    status:           string;
    dateCreation:     string;
    dateModification: string;
}