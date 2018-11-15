import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { tap } from "rxjs/operators";
import { Observable } from "rxjs";
import { AuthUserService } from "./data.auth-user.service";

@Injectable({
  providedIn: "root"
})

export class DataCommentService {
  newComment: Object;

  constructor(private http: HttpClient, private auth: AuthUserService) { }

  addComment(comment: string, id: string | number): Observable<any> {
    return this.http
      .post(`/comment/add/${id}`, { text: comment })
  }

  getComments() {
    return this.http.get("/comment/get")
  }

  getOwnComment(commentId) {
    return this.http.get("/comment/own" + commentId);
  }

  updateComment(commentId, newComment): Observable<any> {
    return this.http.put(`/comment/update/${commentId}`, { text: newComment });
  }

  deleteComment(commentId): Observable<any> {
    return this.http.delete("/comment/delete/" + commentId);
  }
}
