import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import {useForm} from "@inertiajs/react";
import InputError from "@/Components/InputError.jsx";
import InputLabel from "@/Components/InputLabel.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";


export default function Create() {
    const {post,data,setData,processing,errors} = useForm({
        date:'',
        start_time:'',
        end_time:''
    })

    const createAppointment = (e) =>{
        e.preventDefault();
        post(route('appointment.store'),data);
    }
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
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            Appointment create
                            <form onSubmit={createAppointment}>
                                <div>
                                    <InputLabel htmlFor="date" value="Select Date"/>
                                    <InputError message={errors.date}/>
                                </div>
                                <div>
                                    <InputLabel htmlFor="start_time" value="Select start time"/>
                                    <InputError message={errors.start_time}/>
                                </div>
                                <div>
                                    <InputLabel htmlFor="end_time" value="Select end time"/>
                                    <InputError message={errors.end_time}/>
                                </div>

                                <div className="mt-4 flex items-center justify-end">
                                    <PrimaryButton className="ms-4" disabled={processing}>
                                        Create Appointment
                                    </PrimaryButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
