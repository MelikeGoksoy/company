import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var settings = {
    "data": ["Şirket İsmi", "Şirket Adresi", "Telefon No.", "E-Mail", "Kullanıcı Sayısı"]
};
var SettingsService = /** @class */ (function () {
    function SettingsService(http) {
        this.http = http;
    }
    SettingsService.prototype.getSettings = function () {
        return settings;
    };
    SettingsService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], SettingsService);
    return SettingsService;
}());
export { SettingsService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3Muc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BtZWxpa2VnL2NvbXBhbnkvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvc2V0dGluZ3Muc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFPbEQsSUFBTSxRQUFRLEdBQW9CO0lBQ2hDLE1BQU0sRUFBRSxDQUFDLGFBQWEsRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxrQkFBa0IsQ0FBQztDQUN0RixDQUFBO0FBR0Q7SUFFRSx5QkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUFJLENBQUM7SUFFekMscUNBQVcsR0FBWDtRQUNFLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFOVSxlQUFlO1FBRDNCLFVBQVUsRUFBRTtpREFHZSxVQUFVO09BRnpCLGVBQWUsQ0FRM0I7SUFBRCxzQkFBQztDQUFBLEFBUkQsSUFRQztTQVJZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcblxyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgZnJvbSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBmaW5kLCBmaXJzdCwgZmlsdGVyLCBtYXAsIGRlbGF5LCBjb25jYXRNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBJQ29tcGFueVNldHRpbmdzIH0gZnJvbSAnLi4vbW9kZWxzL2NvbXBhbnknO1xyXG5cclxuY29uc3Qgc2V0dGluZ3M6SUNvbXBhbnlTZXR0aW5ncyA9IHtcclxuICBcImRhdGFcIjogW1wixZ5pcmtldCDEsHNtaVwiLCBcIsWeaXJrZXQgQWRyZXNpXCIsIFwiVGVsZWZvbiBOby5cIiwgXCJFLU1haWxcIiwgXCJLdWxsYW7EsWPEsSBTYXnEsXPEsVwiXVxyXG59XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTZXR0aW5nc1NlcnZpY2Uge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxyXG5cclxuICBnZXRTZXR0aW5ncygpOiBJQ29tcGFueVNldHRpbmdzIHtcclxuICAgIHJldHVybiBzZXR0aW5ncztcclxuICB9XHJcblxyXG59XHJcblxyXG4iXX0=