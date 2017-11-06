import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RagnarokService {

  constructor(private http: HttpClient) { }

  getQuestions(): Observable<any> {
    return this.http.get(
        './mocks/preguntas.json'
      );
  }

  getQuestionsDelay(): Observable<any> {
    return this.http.get(
        './mocks/preguntas.json'
      );
  }
}
