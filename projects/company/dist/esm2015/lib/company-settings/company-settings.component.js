import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { SettingsService } from '../services/settings.service';
let CompanySettingsComponent = class CompanySettingsComponent {
    constructor(_setService) {
        this._setService = _setService;
    }
    ngOnInit() {
        this.fetchSettings();
    }
    fetchSettings() {
        this.settings = this._setService.getSettings();
        console.log('settings: ' + this.settings);
    }
};
CompanySettingsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-company-settings',
        template: "  <mat-card-title>\n\t\tListe Ayarlar\u0131\n\t</mat-card-title>\n\t<mat-card-content>\n     <div>\n          <h3 class=\"card-row\">Birinci S\u00FCtun Bilgisi : </h3>\n          <select name=\"\" id=\"\">\n              <option  *ngFor=\"let s of settings.data\" >{{s}}</option>\n          </select>\n      </div>\n       <div>\n          <h3 class=\"card-row\">\u0130kinci S\u00FCtun Bilgisi : </h3>\n          <select name=\"\" id=\"\">\n              <option  *ngFor=\"let s of settings.data\" >{{s}}</option>\n          </select>\n      </div>\n       <div>\n          <h3 class=\"card-row\">\u00DC\u00E7\u00FCnc\u00FC S\u00FCtun Bilgisi : </h3>\n          <select name=\"\" id=\"\">\n              <option  *ngFor=\"let s of settings.data\" >{{s}}</option>\n          </select>\n      </div>\n      <div style=\"text-align:right;\"> \n        <button mat-stroked-button style=\"background-color:#fff\">Kaydet</button>\n      </div>\n   </mat-card-content>\n",
        styles: [":host{width:100%;height:100%}mat-card-title{border-bottom:1px solid gray;padding-bottom:5px;display:flex;flex:1 0 0}.card-row{display:inline-table;margin:2%}"]
    }),
    tslib_1.__metadata("design:paramtypes", [SettingsService])
], CompanySettingsComponent);
export { CompanySettingsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGFueS1zZXR0aW5ncy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbWVsaWtlZy9jb21wYW55LyIsInNvdXJjZXMiOlsibGliL2NvbXBhbnktc2V0dGluZ3MvY29tcGFueS1zZXR0aW5ncy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFbEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBTy9ELElBQWEsd0JBQXdCLEdBQXJDLE1BQWEsd0JBQXdCO0lBRW5DLFlBQW9CLFdBQTRCO1FBQTVCLGdCQUFXLEdBQVgsV0FBVyxDQUFpQjtJQUFJLENBQUM7SUFFckQsUUFBUTtRQUNOLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBQ0QsYUFBYTtRQUNYLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQTtRQUM5QyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDNUMsQ0FBQztDQUNGLENBQUE7QUFYWSx3QkFBd0I7SUFMcEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLHNCQUFzQjtRQUNoQywrOEJBQWdEOztLQUVqRCxDQUFDOzZDQUdpQyxlQUFlO0dBRnJDLHdCQUF3QixDQVdwQztTQVhZLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJQ29tcGFueVNldHRpbmdzIH0gZnJvbSAnLi4vbW9kZWxzL2NvbXBhbnknXG5pbXBvcnQgeyBTZXR0aW5nc1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9zZXR0aW5ncy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWNvbXBhbnktc2V0dGluZ3MnLFxuICB0ZW1wbGF0ZVVybDogJy4vY29tcGFueS1zZXR0aW5ncy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NvbXBhbnktc2V0dGluZ3MuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIENvbXBhbnlTZXR0aW5nc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHNldHRpbmdzOiBJQ29tcGFueVNldHRpbmdzO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zZXRTZXJ2aWNlOiBTZXR0aW5nc1NlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZmV0Y2hTZXR0aW5ncygpO1xuICB9XG4gIGZldGNoU2V0dGluZ3MoKSB7XG4gICAgdGhpcy5zZXR0aW5ncyA9IHRoaXMuX3NldFNlcnZpY2UuZ2V0U2V0dGluZ3MoKVxuICAgIGNvbnNvbGUubG9nKCdzZXR0aW5nczogJyArIHRoaXMuc2V0dGluZ3MpO1xuICB9XG59XG4iXX0=