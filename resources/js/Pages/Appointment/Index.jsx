import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link} from '@inertiajs/react';
import CancelAppointment from "@/Pages/Appointment/Partials/CancelAppointment.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";


export default function Index({appointments}) {

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    List of appointments
                </h2>
            }
        >
            <Head title="Appointment"/>
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="float-end">
                                <Link
                                    href={route('appointment.create')}
                                >
                                    <PrimaryButton>
                                        Create Appointment
                                    </PrimaryButton>
                                </Link>
                            </div>
                            <table className="table-auto">
                                <thead>
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        #
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Date
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Time
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Status
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Action
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                {appointments ? (
                                    appointments.map((appointment,index) =>
                                        <tr key={appointment.id}>
                                            <td className="px-6 py-4">{index + 1}</td>
                                            <td className="px-6 py-4">{appointment.date}</td>
                                            <td className="px-6 py-4">{appointment.start_time + ' - ' + appointment.end_time}</td>
                                            <td className="px-6 py-4">{appointment.status}</td>
                                            <td className="px-6 py-4"><CancelAppointment
                                                appointmentId={appointment.id}/></td>
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
