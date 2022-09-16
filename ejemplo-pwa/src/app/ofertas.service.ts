import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OfertasService {
  private URL: string = `${environment.urlApi}/curso-angular/angel`
  private URL_NODE: string = `http://localhost:4201/ofertas`

  constructor(private http: HttpClient) { }

  getOfertas() {
    return this.http.get(this.URL + '.json')
      .pipe(
        // tap((data) => {
        //   console.log({ data })
        // }),
        map((data: any) => {
          const ofertas: Array<any> = []

          for (let id in data) {
            ofertas.push({ ...data[id], id })
          }

          return ofertas
        })
      )
  }

  getOferta(id: string) {
    return this.http.get(`${this.URL}/${id}.json`)
  }

  createOferta(oferta: any) {
    return this.http.post(this.URL_NODE, oferta)
  }

  deleteOferta(id: string) {
    return this.http.delete(`${this.URL}/${id}.json`)
  }
}
