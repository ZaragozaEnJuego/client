import { User } from '../../core/admin/domain'
import { Offer } from '../../core/negotiations/domain'
import axios from './http'

export class HTTPOfferRepo {
    async createOffer(_property: string, _owner: string, _offerer: string, _amount: number): Promise<string> {
        const response = await axios.post<{ id: string }>('/negotiations', {
            property: _property,
            owner: _owner,
            offerer: _offerer,
            amount: _amount
        })
        if (response.status !== 201) {
            throw new Error('No se puedo obtener los datos de la oferta creada')
        }
        console.log(response.data)
        return response.data.id
    }
    async getOffererOffers(id: string): Promise<Offer[]> {
        interface OfferDTO {
            _id: string,
            property: string,
            offerer: string,
            owner: string,
            amount: number
        }
        const response = await axios.get<OfferDTO[]>(`/negotiation/${id}/offerer`, {
            headers: {
                accept: 'application/json'
            }
        })
        if (response.status !== 200) {
            throw new Error('Error al obtener las ofertas del servidor');
        }
        console.log(response.data)
        return response.data.map((offerDTO => {
            const offer: Offer = {
                id: offerDTO._id,
                property: offerDTO.property,
                offerer: offerDTO.offerer,
                owner: offerDTO.owner,
                amount: offerDTO.amount
            }
            return offer
        }))
    }
    async getOwnerOffers(id: string): Promise<Offer[]> {
        interface OfferDTO {
            _id: string,
            property: string,
            offerer: string,
            owner: string,
            amount: number
        }
        const response = await axios.get<OfferDTO[]>(`/negotiation/${id}/owner`, {
            headers: {
                accept: 'application/json'
            }
        })
        if (response.status !== 200) {
            throw new Error('Error al obtener las ofertas del servidor');
        }
        console.log(response.data)
        return response.data.map((offerDTO => {
            const offer: Offer = {
                id: offerDTO._id,
                property: offerDTO.property,
                offerer: offerDTO.offerer,
                owner: offerDTO.owner,
                amount: offerDTO.amount
            }
            return offer
        }))
    }
    async execOffer(offer: Offer, offerer: User, owner: User): Promise<string> {
        //TODO: Este servicio desarrollarse en el servidor y en este repositorio
        // offerer se convertirá en el nuevo propietario de la propiedad con id offer.property
        // owner.liquidity += offer.amount, se elimina la propiedad con id offer.property de owner.properties
       return ''
    }
    async deleteOffer(offer: Offer): Promise<string> {
        //TODO: Este servicio desarrollarse en el servidor y en este repositorio
        return ''
    }
}