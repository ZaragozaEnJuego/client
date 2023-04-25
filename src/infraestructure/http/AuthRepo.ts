import { TokenJWT } from "../../core/auth/domain/model"
import axios from "./http"
export class HttpAuthRepo {



     async getToken(): Promise<TokenJWT>{
        const tokenUrl= ""

        const token = (await axios.get<TokenJWT>(tokenUrl)).data

        return token



        
    }
}