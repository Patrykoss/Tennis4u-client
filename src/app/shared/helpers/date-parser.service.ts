import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class DateParserService{
    parseDate(date: Date): string {
        let splt = date.toString().split('T');
        return `${splt[0]} ${splt[1].slice(0, -3)}`;
    }
}