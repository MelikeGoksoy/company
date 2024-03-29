import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const settings = {
    "data": ["Şirket İsmi", "Şirket Adresi", "Telefon No.", "E-Mail", "Kullanıcı Sayısı"]
};
let SettingsService = class SettingsService {
    constructor(http) {
        this.http = http;
    }
    getSettings() {
        return settings;
    }
};
SettingsService = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [HttpClient])
], SettingsService);
export { SettingsService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3Muc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BtZWxpa2VnL2NvbXBhbnkvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvc2V0dGluZ3Muc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFPbEQsTUFBTSxRQUFRLEdBQW9CO0lBQ2hDLE1BQU0sRUFBRSxDQUFDLGFBQWEsRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxrQkFBa0IsQ0FBQztDQUN0RixDQUFBO0FBR0QsSUFBYSxlQUFlLEdBQTVCLE1BQWEsZUFBZTtJQUUxQixZQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO0lBQUksQ0FBQztJQUV6QyxXQUFXO1FBQ1QsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztDQUVGLENBQUE7QUFSWSxlQUFlO0lBRDNCLFVBQVUsRUFBRTs2Q0FHZSxVQUFVO0dBRnpCLGVBQWUsQ0FRM0I7U0FSWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5cclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YsIGZyb20gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZmluZCwgZmlyc3QsIGZpbHRlciwgbWFwLCBkZWxheSwgY29uY2F0TWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgSUNvbXBhbnlTZXR0aW5ncyB9IGZyb20gJy4uL21vZGVscy9jb21wYW55JztcclxuXHJcbmNvbnN0IHNldHRpbmdzOklDb21wYW55U2V0dGluZ3MgPSB7XHJcbiAgXCJkYXRhXCI6IFtcIsWeaXJrZXQgxLBzbWlcIiwgXCLFnmlya2V0IEFkcmVzaVwiLCBcIlRlbGVmb24gTm8uXCIsIFwiRS1NYWlsXCIsIFwiS3VsbGFuxLFjxLEgU2F5xLFzxLFcIl1cclxufVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU2V0dGluZ3NTZXJ2aWNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cclxuXHJcbiAgZ2V0U2V0dGluZ3MoKTogSUNvbXBhbnlTZXR0aW5ncyB7XHJcbiAgICByZXR1cm4gc2V0dGluZ3M7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuIl19