import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class MoveService {
  private readonly moveURL: string = environment.moveDbURL;
  private readonly apiKey: string = environment.moveDBApiKey;

  constructor(private http: HttpClient) {}

  searchMovie(searchTxt: string): Observable<any> {
    const url = this.moveURL
      + 'search/movie'
      + '?api_key='
      + this.apiKey
      + '&query=' + searchTxt;

    return this.http.get(url);
  }
}
