import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

export abstract class CoreService<T> {

    get apiUrl(): string {
        return environment.apiUrl + this.entityName;
    }

    constructor(protected entityName: string, protected http: HttpClient) { }

    public getAll(): Observable<T[]> {
        console.log(this.apiUrl);
        return this.http.get<T[]>(this.apiUrl);
    }
}