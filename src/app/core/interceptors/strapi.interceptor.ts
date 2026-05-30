import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export const strapiInterceptor: HttpInterceptorFn = (req, next) => {
  // Only add the token if the request is going to our Strapi API
  if (req.url.startsWith(environment.strapiApiUrl)) {
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${environment.strapiToken}`
      }
    });
    return next(authReq);
  }

  // If it's a request to another API, pass it through untouched
  return next(req);
};
