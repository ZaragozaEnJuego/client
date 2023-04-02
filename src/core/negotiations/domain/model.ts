import { Landlord } from "../../landlord/model";
import { Propertie } from "../../properties/domain";

export type Offer = {
    id: number;
    property: Propertie;
    offerer: Landlord;
    owner: Landlord;
    amount: number;
}