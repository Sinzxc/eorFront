import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpHandler, HttpRequest,HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";
import { TokenStorageService } from "../services/tokenService/token-storage.service";
const TOKEN_HEADER_KEY = 'Authorization'

@Injectable()   
export class AuthIntercepter {
    constructor(private token: TokenStorageService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let authReq = req
        const token = this.token.getToken()

        if(token != null) {
            authReq = req.clone(
                {headers: req.headers.set(
                    TOKEN_HEADER_KEY, 
                    'Bearer ' + token)}
                )
        }

        return next.handle(authReq)
    }
}