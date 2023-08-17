import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from 'rxjs';

@Injectable()
export class RouteInterceptor implements HttpInterceptor {

  constructor() {
    console.log("intecept const")
  }

  intercept(httpRequest: HttpRequest<any>, httpHandler: HttpHandler): Observable<HttpEvent<any>> {
    console.log("intecept")
    return httpHandler.handle(httpRequest);
  }
}
