import { Kind } from "../../properties/domain";

export type User = {
    id: string;
    name: string;
    icon?: string;
    access: boolean;
}

export type PropertyPurchaseData = {
    property: string,
    kind: Kind,
    date: Date
}