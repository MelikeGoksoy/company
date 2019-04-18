import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
import { delay } from 'rxjs/operators';
const companies = [
    {
        "id": 1,
        "name": "Cantek",
        "address": "adres1",
        "users": [
            {
                "id": "1",
                "name": "Hüseyin",
                "surname": "Çöl",
                "phonenumber": "567",
                "mail": "asda@gmail.com"
            },
            {
                "id": "2",
                "name": "Ahmet",
                "surname": "Yokolmaz",
                "phonenumber": "0908",
                "mail": "asda@gmail.com"
            },
            {
                "id": "3",
                "name": "Kemal",
                "surname": "Kel",
                "phonenumber": "567",
                "mail": "asda@gmail.com"
            },
            {
                "id": "4",
                "name": "Senem",
                "surname": "Sen",
                "phonenumber": "0908",
                "mail": "asda@gmail.com"
            }
        ]
    },
    {
        "id": 2,
        "name": "Ice World",
        "address": "adres2",
        "users": [
            {
                "id": "1",
                "name": "Ali",
                "surname": "Çelik",
                "phonenumber": "333",
                "mail": "a@gmail.com"
            },
            {
                "id": "2",
                "name": "Hacı",
                "surname": "Lokman",
                "phonenumber": "444",
                "mail": "h@gmail.com"
            }
        ]
    },
    {
        "id": 3,
        "name": "Biobest",
        "address": "adres3",
        "users": [
            {
                "id": "1",
                "name": "Melike",
                "surname": "Göksoy",
                "phonenumber": "567",
                "mail": "asda@gmail.com"
            },
            {
                "id": "2",
                "name": "Canberk",
                "surname": "Ardıç",
                "phonenumber": "0908",
                "mail": "asda@gmail.com"
            }
        ]
    },
    {
        "id": 4,
        "name": "Sagun",
        "address": "adres4",
        "users": [
            {
                "id": "1",
                "name": "Cem",
                "surname": "Topkaya",
                "phonenumber": "333",
                "mail": "a@gmail.com"
            },
            {
                "id": "2",
                "name": "Leyla",
                "surname": "Ley",
                "phonenumber": "444",
                "mail": "h@gmail.com"
            }
        ]
    }
];
let CompanyService = class CompanyService {
    constructor(http) {
        this.http = http;
    }
    getCompany(id) {
        console.log('gelen id:', id);
        return this.temp_getCompany(id);
    }
    temp_getCompany(id) {
        return from(companies).pipe(delay(1));
    }
    temp_getCompany1(id) {
        return from(companies);
    }
    getCompanies() {
        return from(companies);
    }
};
CompanyService = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [HttpClient])
], CompanyService);
export { CompanyService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGFueS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG1lbGlrZWcvY29tcGFueS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9jb21wYW55LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWxELE9BQU8sRUFBa0IsSUFBSSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzVDLE9BQU8sRUFBNEIsS0FBSyxFQUFhLE1BQU0sZ0JBQWdCLENBQUM7QUFHNUUsTUFBTSxTQUFTLEdBQUc7SUFDaEI7UUFDRSxJQUFJLEVBQUUsQ0FBQztRQUNQLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLFNBQVMsRUFBRSxRQUFRO1FBQ25CLE9BQU8sRUFBRTtZQUNQO2dCQUNFLElBQUksRUFBRSxHQUFHO2dCQUNULE1BQU0sRUFBRSxTQUFTO2dCQUNqQixTQUFTLEVBQUUsS0FBSztnQkFDaEIsYUFBYSxFQUFFLEtBQUs7Z0JBQ3BCLE1BQU0sRUFBRSxnQkFBZ0I7YUFDekI7WUFDRDtnQkFDRSxJQUFJLEVBQUUsR0FBRztnQkFDVCxNQUFNLEVBQUUsT0FBTztnQkFDZixTQUFTLEVBQUUsVUFBVTtnQkFDckIsYUFBYSxFQUFFLE1BQU07Z0JBQ3JCLE1BQU0sRUFBRSxnQkFBZ0I7YUFDekI7WUFDRDtnQkFDRSxJQUFJLEVBQUUsR0FBRztnQkFDVCxNQUFNLEVBQUUsT0FBTztnQkFDZixTQUFTLEVBQUUsS0FBSztnQkFDaEIsYUFBYSxFQUFFLEtBQUs7Z0JBQ3BCLE1BQU0sRUFBRSxnQkFBZ0I7YUFDekI7WUFDRDtnQkFDRSxJQUFJLEVBQUUsR0FBRztnQkFDVCxNQUFNLEVBQUUsT0FBTztnQkFDZixTQUFTLEVBQUUsS0FBSztnQkFDaEIsYUFBYSxFQUFFLE1BQU07Z0JBQ3JCLE1BQU0sRUFBRSxnQkFBZ0I7YUFDekI7U0FDRjtLQUNGO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsQ0FBQztRQUNQLE1BQU0sRUFBRSxXQUFXO1FBQ25CLFNBQVMsRUFBRSxRQUFRO1FBQ25CLE9BQU8sRUFBRTtZQUNQO2dCQUNFLElBQUksRUFBRSxHQUFHO2dCQUNULE1BQU0sRUFBRSxLQUFLO2dCQUNiLFNBQVMsRUFBRSxPQUFPO2dCQUNsQixhQUFhLEVBQUUsS0FBSztnQkFDcEIsTUFBTSxFQUFFLGFBQWE7YUFDdEI7WUFDRDtnQkFDRSxJQUFJLEVBQUUsR0FBRztnQkFDVCxNQUFNLEVBQUUsTUFBTTtnQkFDZCxTQUFTLEVBQUUsUUFBUTtnQkFDbkIsYUFBYSxFQUFFLEtBQUs7Z0JBQ3BCLE1BQU0sRUFBRSxhQUFhO2FBQ3RCO1NBQ0Y7S0FDRjtJQUNBO1FBQ0MsSUFBSSxFQUFFLENBQUM7UUFDUCxNQUFNLEVBQUUsU0FBUztRQUNqQixTQUFTLEVBQUUsUUFBUTtRQUNuQixPQUFPLEVBQUU7WUFDUDtnQkFDRSxJQUFJLEVBQUUsR0FBRztnQkFDVCxNQUFNLEVBQUUsUUFBUTtnQkFDaEIsU0FBUyxFQUFFLFFBQVE7Z0JBQ25CLGFBQWEsRUFBRSxLQUFLO2dCQUNwQixNQUFNLEVBQUUsZ0JBQWdCO2FBQ3pCO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLEdBQUc7Z0JBQ1QsTUFBTSxFQUFFLFNBQVM7Z0JBQ2pCLFNBQVMsRUFBRSxPQUFPO2dCQUNsQixhQUFhLEVBQUUsTUFBTTtnQkFDckIsTUFBTSxFQUFFLGdCQUFnQjthQUN6QjtTQUNGO0tBQ0Y7SUFDRDtRQUNFLElBQUksRUFBRSxDQUFDO1FBQ1AsTUFBTSxFQUFFLE9BQU87UUFDZixTQUFTLEVBQUUsUUFBUTtRQUNuQixPQUFPLEVBQUU7WUFDUDtnQkFDRSxJQUFJLEVBQUUsR0FBRztnQkFDVCxNQUFNLEVBQUUsS0FBSztnQkFDYixTQUFTLEVBQUUsU0FBUztnQkFDcEIsYUFBYSxFQUFFLEtBQUs7Z0JBQ3BCLE1BQU0sRUFBRSxhQUFhO2FBQ3RCO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLEdBQUc7Z0JBQ1QsTUFBTSxFQUFFLE9BQU87Z0JBQ2YsU0FBUyxFQUFFLEtBQUs7Z0JBQ2hCLGFBQWEsRUFBRSxLQUFLO2dCQUNwQixNQUFNLEVBQUUsYUFBYTthQUN0QjtTQUNGO0tBQ0Y7Q0FDRixDQUFBO0FBR0QsSUFBYSxjQUFjLEdBQTNCLE1BQWEsY0FBYztJQUV6QixZQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO0lBQUcsQ0FBQztJQUV4QyxVQUFVLENBQUMsRUFBVTtRQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM3QixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELGVBQWUsQ0FBQyxFQUFVO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FDekIsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUNULENBQUM7SUFDSixDQUFDO0lBRUQsZ0JBQWdCLENBQUMsRUFBVTtRQUN6QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUQsWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7Q0FDRixDQUFBO0FBdEJZLGNBQWM7SUFEMUIsVUFBVSxFQUFFOzZDQUdlLFVBQVU7R0FGekIsY0FBYyxDQXNCMUI7U0F0QlksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIG9mLCBmcm9tIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaW5kLCBmaXJzdCwgZmlsdGVyLCBtYXAsIGRlbGF5LCBjb25jYXRNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDb21wYW55IH0gZnJvbSAnLi4vbW9kZWxzL2NvbXBhbnknO1xuXG5jb25zdCBjb21wYW5pZXMgPSBbXG4gIHtcbiAgICBcImlkXCI6IDEsXG4gICAgXCJuYW1lXCI6IFwiQ2FudGVrXCIsXG4gICAgXCJhZGRyZXNzXCI6IFwiYWRyZXMxXCIsXG4gICAgXCJ1c2Vyc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCIxXCIsXG4gICAgICAgIFwibmFtZVwiOiBcIkjDvHNleWluXCIsXG4gICAgICAgIFwic3VybmFtZVwiOiBcIsOHw7ZsXCIsXG4gICAgICAgIFwicGhvbmVudW1iZXJcIjogXCI1NjdcIixcbiAgICAgICAgXCJtYWlsXCI6IFwiYXNkYUBnbWFpbC5jb21cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcIjJcIixcbiAgICAgICAgXCJuYW1lXCI6IFwiQWhtZXRcIixcbiAgICAgICAgXCJzdXJuYW1lXCI6IFwiWW9rb2xtYXpcIixcbiAgICAgICAgXCJwaG9uZW51bWJlclwiOiBcIjA5MDhcIixcbiAgICAgICAgXCJtYWlsXCI6IFwiYXNkYUBnbWFpbC5jb21cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcIjNcIixcbiAgICAgICAgXCJuYW1lXCI6IFwiS2VtYWxcIixcbiAgICAgICAgXCJzdXJuYW1lXCI6IFwiS2VsXCIsXG4gICAgICAgIFwicGhvbmVudW1iZXJcIjogXCI1NjdcIixcbiAgICAgICAgXCJtYWlsXCI6IFwiYXNkYUBnbWFpbC5jb21cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcIjRcIixcbiAgICAgICAgXCJuYW1lXCI6IFwiU2VuZW1cIixcbiAgICAgICAgXCJzdXJuYW1lXCI6IFwiU2VuXCIsXG4gICAgICAgIFwicGhvbmVudW1iZXJcIjogXCIwOTA4XCIsXG4gICAgICAgIFwibWFpbFwiOiBcImFzZGFAZ21haWwuY29tXCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDIsXG4gICAgXCJuYW1lXCI6IFwiSWNlIFdvcmxkXCIsXG4gICAgXCJhZGRyZXNzXCI6IFwiYWRyZXMyXCIsXG4gICAgXCJ1c2Vyc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCIxXCIsXG4gICAgICAgIFwibmFtZVwiOiBcIkFsaVwiLFxuICAgICAgICBcInN1cm5hbWVcIjogXCLDh2VsaWtcIixcbiAgICAgICAgXCJwaG9uZW51bWJlclwiOiBcIjMzM1wiLFxuICAgICAgICBcIm1haWxcIjogXCJhQGdtYWlsLmNvbVwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IFwiMlwiLFxuICAgICAgICBcIm5hbWVcIjogXCJIYWPEsVwiLFxuICAgICAgICBcInN1cm5hbWVcIjogXCJMb2ttYW5cIixcbiAgICAgICAgXCJwaG9uZW51bWJlclwiOiBcIjQ0NFwiLFxuICAgICAgICBcIm1haWxcIjogXCJoQGdtYWlsLmNvbVwiXG4gICAgICB9XG4gICAgXVxuICB9LFxuICAge1xuICAgIFwiaWRcIjogMyxcbiAgICBcIm5hbWVcIjogXCJCaW9iZXN0XCIsXG4gICAgXCJhZGRyZXNzXCI6IFwiYWRyZXMzXCIsXG4gICAgXCJ1c2Vyc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCIxXCIsXG4gICAgICAgIFwibmFtZVwiOiBcIk1lbGlrZVwiLFxuICAgICAgICBcInN1cm5hbWVcIjogXCJHw7Zrc295XCIsXG4gICAgICAgIFwicGhvbmVudW1iZXJcIjogXCI1NjdcIixcbiAgICAgICAgXCJtYWlsXCI6IFwiYXNkYUBnbWFpbC5jb21cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcIjJcIixcbiAgICAgICAgXCJuYW1lXCI6IFwiQ2FuYmVya1wiLFxuICAgICAgICBcInN1cm5hbWVcIjogXCJBcmTEscOnXCIsXG4gICAgICAgIFwicGhvbmVudW1iZXJcIjogXCIwOTA4XCIsXG4gICAgICAgIFwibWFpbFwiOiBcImFzZGFAZ21haWwuY29tXCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDQsXG4gICAgXCJuYW1lXCI6IFwiU2FndW5cIixcbiAgICBcImFkZHJlc3NcIjogXCJhZHJlczRcIixcbiAgICBcInVzZXJzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcIjFcIixcbiAgICAgICAgXCJuYW1lXCI6IFwiQ2VtXCIsXG4gICAgICAgIFwic3VybmFtZVwiOiBcIlRvcGtheWFcIixcbiAgICAgICAgXCJwaG9uZW51bWJlclwiOiBcIjMzM1wiLFxuICAgICAgICBcIm1haWxcIjogXCJhQGdtYWlsLmNvbVwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IFwiMlwiLFxuICAgICAgICBcIm5hbWVcIjogXCJMZXlsYVwiLFxuICAgICAgICBcInN1cm5hbWVcIjogXCJMZXlcIixcbiAgICAgICAgXCJwaG9uZW51bWJlclwiOiBcIjQ0NFwiLFxuICAgICAgICBcIm1haWxcIjogXCJoQGdtYWlsLmNvbVwiXG4gICAgICB9XG4gICAgXVxuICB9XG5dXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb21wYW55U2VydmljZSB7XG4gIFxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHt9XG5cbiAgZ2V0Q29tcGFueShpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxDb21wYW55W10+IHtcbiAgICBjb25zb2xlLmxvZygnZ2VsZW4gaWQ6JywgaWQpO1xuICAgIHJldHVybiB0aGlzLnRlbXBfZ2V0Q29tcGFueShpZCk7XG4gIH1cblxuICB0ZW1wX2dldENvbXBhbnkoaWQ6IG51bWJlcik6IGFueSB7XG4gICAgcmV0dXJuIGZyb20oY29tcGFuaWVzKS5waXBlKFxuICAgICAgZGVsYXkoMSlcbiAgICApO1xuICB9XG5cbiAgdGVtcF9nZXRDb21wYW55MShpZDogbnVtYmVyKTogYW55IHtcbiAgICByZXR1cm4gZnJvbShjb21wYW5pZXMpO1xuICB9XG5cbiAgZ2V0Q29tcGFuaWVzKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIGZyb20oY29tcGFuaWVzKTtcbiAgfVxufVxuIl19