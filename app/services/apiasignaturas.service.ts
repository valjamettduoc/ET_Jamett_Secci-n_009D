import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Asignaturas, Asignatura, IAlumno } from "src/interfaces/asignaturas";

@Injectable({
  providedIn: "root",
})
export class ApiasignaturasService {
  constructor(private httpclient: HttpClient) {}

  getAsignatura(): Observable<Asignaturas[]> {
    return this.httpclient.get<Asignaturas[]>(
      `${environment.apiUrl}/asignaturas`
    );
  }

  postAsignatura(newAsignatura: Asignatura): Observable<Asignatura> {
    return this.httpclient.post<Asignatura>(
      `${environment.apiUrl}/asignaturas`,
      newAsignatura
    );
  }

  putAsignatura(asignatura: any): Observable<Asignaturas> {
    return this.httpclient.put<Asignaturas>(
      `${environment.apiUrl}/asignaturas/${asignatura.id}`,
      asignatura
    );
  }

  deleteAsignatura(asignatura: any): Observable<Asignaturas> {
    return this.httpclient.delete<Asignaturas>(
      `${environment.apiUrl}/asignaturas/${asignatura.id}`
    );
  }

  getAlumnos(): Observable<IAlumno[]> {
    return this.httpclient.get<IAlumno[]>(`${environment.apiUrl}/usuarios`);
  }

  saveQrData(qrData: any): Observable<any> {
    return this.httpclient.post(`${environment.apiUrl}/qrgenerado`, qrData);
  }

  getAllQrs(): Observable<any[]> {
    return this.httpclient.get<any[]>(`${environment.apiUrl}/qrgenerado`);
  }
}
