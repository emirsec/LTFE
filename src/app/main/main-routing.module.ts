import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IncidentsComponent } from './incident-management/incidents/incidents.component';
import { AddEditIncidentsComponent } from './incident-management/incidents/add-edit-incidents/add-edit-incidents.component';
import { IncidentManagementDashboardComponent } from './incident-management/incident-management-dashboard/incident-management-dashboard.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                children: [
                    { path: 'dashboard', component: DashboardComponent, data: { permission: 'Pages.Tenant.Dashboard' } },
                    { path: 'incident-management', component: IncidentManagementDashboardComponent, },
                    { path: 'incidents', component: IncidentsComponent },
                    { path: 'add-edit-incident', component: AddEditIncidentsComponent },
                    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
                    { path: '**', redirectTo: 'dashboard' }
                ]
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class MainRoutingModule { }
