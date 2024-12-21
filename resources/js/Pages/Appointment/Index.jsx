import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import CancelAppointment from "@/Pages/Appointment/Partials/CancelAppointment.jsx";


export default function Index({appointments}) {

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    List
                </h2>
            }
        >
            <Head title="Appointment"/>
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <table className="table-auto">
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                {appointments ? (
                                    appointments.map((appointment,index) =>
                                        <tr key={appointment.id}>
                                            <td>{index + 1 }</td>
                                            <td>{appointment.date}</td>
                                            <td>{appointment.start_time + ' - ' + appointment.end_time}</td>
                                            <td>{appointment.status}</td>
                                            <td> <CancelAppointment appointmentId={appointment.id} /></td>
                                        </tr>
                                    )
                                ) : (
                                    <tr>
                                       <td>Empty - Please create an appointment</td>
                                    </tr>
                                )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
);
}
