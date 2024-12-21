import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';


export default function Create() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Appointment create
                </h2>
            }
        >
            <Head title="Appointment"/>
            <div className="py-12">
                <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                    <div className="p-6 text-gray-900">
                        Appointment create
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
