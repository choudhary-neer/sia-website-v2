import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { BoardMembersFile, BoardMember } from '../models/board-member';

@Injectable({ providedIn: 'root' })
export class BoardMembersService {
  private readonly url = 'assets/content/board-members.json';

  constructor(private http: HttpClient) {}

  getBoardMembers(): Observable<BoardMember[]> {
    return this.http.get<BoardMembersFile>(this.url).pipe(
      map(data => data.boardMembers)
    );
  }
}