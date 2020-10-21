import { authHeaderInterceptor } from './auth-header-interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

export const httpInterceptorProviders = [
    {provide : HTTP_INTERCEPTORS, useClass: authHeaderInterceptor, multi : true}
]