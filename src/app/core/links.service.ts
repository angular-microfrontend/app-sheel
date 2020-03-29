import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { LinkInterface } from "../shared/link-interface";

@Injectable({
  providedIn: "root"
})
export class LinksService {
  baseUrl: string = "assets/";

  constructor(private http: HttpClient) {}

  getLinks(): Observable<LinkInterface[]> {
    return this.http
      .get<LinkInterface[]>(`${this.baseUrl}links.json`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any) {
    console.log("Error from server: ", error);
    return Observable.throw(error || "Node.js server error");
  }
}
