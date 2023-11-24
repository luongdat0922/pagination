import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export abstract class IService<T> {

    get apiUrl(): string {
        return "http://localhost:3000/api/" + this.entityName;
    }

    constructor(protected entityName: string, protected http: HttpClient) { }

    public getAll(): Observable<T[]> {
        console.log(this.apiUrl);
        return this.http.get<T[]>(this.apiUrl);
    }
}