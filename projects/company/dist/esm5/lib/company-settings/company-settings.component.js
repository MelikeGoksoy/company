import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { SettingsService } from '../services/settings.service';
var CompanySettingsComponent = /** @class */ (function () {
    function CompanySettingsComponent(_setService) {
        this._setService = _setService;
    }
    CompanySettingsComponent.prototype.ngOnInit = function () {
        this.fetchSettings();
    };
    CompanySettingsComponent.prototype.fetchSettings = function () {
        this.settings = this._setService.getSettings();
        console.log('settings: ' + this.settings);
    };
    CompanySettingsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-company-settings',
            template: "  <mat-card-title>\n\t\tListe Ayarlar\u0131\n\t</mat-card-title>\n\t<mat-card-content>\n     <div>\n          <h3 class=\"card-row\">Birinci S\u00FCtun Bilgisi : </h3>\n          <select name=\"\" id=\"\">\n              <option  *ngFor=\"let s of settings.data\" >{{s}}</option>\n          </select>\n      </div>\n       <div>\n          <h3 class=\"card-row\">\u0130kinci S\u00FCtun Bilgisi : </h3>\n          <select name=\"\" id=\"\">\n              <option  *ngFor=\"let s of settings.data\" >{{s}}</option>\n          </select>\n      </div>\n       <div>\n          <h3 class=\"card-row\">\u00DC\u00E7\u00FCnc\u00FC S\u00FCtun Bilgisi : </h3>\n          <select name=\"\" id=\"\">\n              <option  *ngFor=\"let s of settings.data\" >{{s}}</option>\n          </select>\n      </div>\n      <div style=\"text-align:right;\"> \n        <button mat-stroked-button style=\"background-color:#fff\">Kaydet</button>\n      </div>\n   </mat-card-content>\n",
            styles: [":host{width:100%;height:100%}mat-card-title{border-bottom:1px solid gray;padding-bottom:5px;display:flex;flex:1 0 0}.card-row{display:inline-table;margin:2%}"]
        }),
        tslib_1.__metadata("design:paramtypes", [SettingsService])
    ], CompanySettingsComponent);
    return CompanySettingsComponent;
}());
export { CompanySettingsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGFueS1zZXR0aW5ncy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbWVsaWtlZy9jb21wYW55LyIsInNvdXJjZXMiOlsibGliL2NvbXBhbnktc2V0dGluZ3MvY29tcGFueS1zZXR0aW5ncy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFbEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBTy9EO0lBRUUsa0NBQW9CLFdBQTRCO1FBQTVCLGdCQUFXLEdBQVgsV0FBVyxDQUFpQjtJQUFJLENBQUM7SUFFckQsMkNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBQ0QsZ0RBQWEsR0FBYjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQTtRQUM5QyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQVZVLHdCQUF3QjtRQUxwQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsc0JBQXNCO1lBQ2hDLCs4QkFBZ0Q7O1NBRWpELENBQUM7aURBR2lDLGVBQWU7T0FGckMsd0JBQXdCLENBV3BDO0lBQUQsK0JBQUM7Q0FBQSxBQVhELElBV0M7U0FYWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSUNvbXBhbnlTZXR0aW5ncyB9IGZyb20gJy4uL21vZGVscy9jb21wYW55J1xuaW1wb3J0IHsgU2V0dGluZ3NTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvc2V0dGluZ3Muc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1jb21wYW55LXNldHRpbmdzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbXBhbnktc2V0dGluZ3MuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jb21wYW55LXNldHRpbmdzLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDb21wYW55U2V0dGluZ3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBzZXR0aW5nczogSUNvbXBhbnlTZXR0aW5ncztcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfc2V0U2VydmljZTogU2V0dGluZ3NTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmZldGNoU2V0dGluZ3MoKTtcbiAgfVxuICBmZXRjaFNldHRpbmdzKCkge1xuICAgIHRoaXMuc2V0dGluZ3MgPSB0aGlzLl9zZXRTZXJ2aWNlLmdldFNldHRpbmdzKClcbiAgICBjb25zb2xlLmxvZygnc2V0dGluZ3M6ICcgKyB0aGlzLnNldHRpbmdzKTtcbiAgfVxufVxuIl19