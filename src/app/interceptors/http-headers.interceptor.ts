import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment as env } from "src/environments/environment";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
    constructor() { }
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
                'X-RapidAPI-Host': env.RapidAPI_Host,
                'X-RapidAPI-Key': env.RapidAPI_Key
            },
            setParams: {
                key: env.API_KEY
            }
        });
        return next.handle(req);
    }
    
}