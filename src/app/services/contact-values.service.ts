import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContactsFile, Contact } from '../models/contact';

@Injectable({ providedIn: 'root' })
export class ContactValuesService {
  private readonly url = 'assets/content/contacts.json';

  constructor(private http: HttpClient) {}

  getContactValues(): Observable<Contact> {
    return this.http.get<ContactsFile>(this.url);
  }
}