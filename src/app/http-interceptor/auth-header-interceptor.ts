import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class authHeaderInterceptor implements HttpInterceptor
{
    intercept(request:HttpRequest<any>,next:HttpHandler)
    {
        console.log('~~ Auth Intercept Provider ~~');
        console.log(request.url);
        const reqClone = request.clone({
            setHeaders : {Source:"web"}
        });
        return next.handle(reqClone).pipe
        (
          catchError(this.handleError)
        ); 
    }
    private handleError(error:HttpErrorResponse){
        console.log("~~ inside handleError ~~");
        alert ("Somethinhg went wrong !");
        return throwError(error);
        
    }

}