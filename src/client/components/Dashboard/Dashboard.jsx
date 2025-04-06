import React, { useState } from "react";
import { Card } from 'primereact/card';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Tag } from 'primereact/tag';
import { Calendar } from 'primereact/calendar';
import DashboardStyles from "./Dashboard.module.scss";
import ButtonStyles from "styles/Button.module.scss";

const Dashboard = () => {
    const [date, setDate] = useState(null);
    const appointments = [
        {
            patientName: 'Vikash',
            date: '2025-01-20 10:00 AM'
        }, {
            patientName: 'Renuka',
            date: '2025-01-20 12:00 PM'
        }, {
            patientName: 'Srividya',
            date: '2025-01-20 03:00 PM'
        }
    ];
    const prescriptions = [
        {
            patientName: 'Srinidhi',
            description: 'XYZ Bhauln',
            date: '2025-01-20'
        }, {
            patientName: 'Kishore',
            description: 'XYZ Bhauln',
            date: '2025-01-20'
        }, {
            patientName: 'SwayamPrabha',
            description: 'XYZ Bhauln',
            date: '2025-01-20'
        }
    ];
    const dateBodyTemplate = (data) => {
        return <Tag value={data.date} severity="secondary" rounded></Tag>;
    };
    return (
        <div className={DashboardStyles.dashboardContainer}>
            {/* Appointments Card */}
            <Card title="Appointment" className={DashboardStyles.dashboardCards}>
                <button className={[ ButtonStyles.btn, ButtonStyles.secondaryBtn, DashboardStyles.viewAllBtn].join(" ")}>View All</button> 
                <DataTable value={appointments} className={DashboardStyles.dashboardTable}>
                    <Column field="patientName" header="Patient Name"></Column>
                    <Column field="date" header="" body={dateBodyTemplate}></Column>
                </DataTable>
            </Card>
            {/* Prescription Card */}
            <Card title="Prescription" className={DashboardStyles.dashboardCards}>
                <button className={[ ButtonStyles.btn, ButtonStyles.secondaryBtn, DashboardStyles.viewAllBtn].join(" ")}>View All</button> 
                <DataTable value={prescriptions} className={DashboardStyles.dashboardTable}>
                    <Column field="patientName" header="Patient Name"></Column>
                    <Column field="description" header="Description"></Column>
                    <Column field="date" header="" body={dateBodyTemplate}></Column>
                </DataTable>
            </Card>
            {/* Calendar Card */}
            <Card title="Calendar" className={DashboardStyles.dashboardCards}>
                <Calendar value={date} onChange={(e) => setDate(e.value)} inline showWeek />
            </Card>
        </div>
    );
}

export default Dashboard;
