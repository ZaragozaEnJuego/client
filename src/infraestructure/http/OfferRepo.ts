import { Offer } from '../../core/negotiations/domain'
import axios from './http'

export class HTTPOfferRepo {
    async createOffer(_property: string, _offerer: string, _amount: number): Promise<string> {
        const newOffer = {
            property: _property,
            owner: _offerer,
            amount: _amount,
          };

        const response = await axios.post('/offers', newOffer)
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
        const response = await axios.get<OfferDTO[]>(`/offers/offerer/${id}`, {
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
        const response = await axios.get<OfferDTO[]>(`/offers/owner/${id}`, {
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
    async execOffer(offerId: string): Promise<string> {
        const response = await axios.post(`/offers/accept/${offerId}`, {
            headers: {
                accept: 'application/json'
            }
        })
        if (response.status !== 201) {
            throw new Error('Error al ejecutar la oferta')
        }
        console.log(response.data)
        return response.data.id
    }
    async deleteOffer(offerId: string): Promise<string> {
        const response = await axios.delete(`/offers/${offerId}`, {
            headers: {
                accept: 'application/json'
            }
        })
        if (response.status !== 201) {
            throw new Error('Error al eliminar la oferta')
        }
        console.log(response.data)
        return response.data.id
    }
}