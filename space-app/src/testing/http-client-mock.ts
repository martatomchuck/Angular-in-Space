import { HttpClient } from '@angular/common/http';

export class HttpClientMock implements Partial<HttpClient> {
  get(url, options?) { return null; }
  post(url, body, options?) { return null; }
  put(url, body, options?) { return null; }
  delete(url, options?) { return null; }
}
