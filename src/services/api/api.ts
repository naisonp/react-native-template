import HttpService from '../http';

class ApiService {
  public http: HttpService;

  constructor(baseUrl: string) {
    this.http = new HttpService(baseUrl);

    // Request interceptors go here
  }
}

export default ApiService;
