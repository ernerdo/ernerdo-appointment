import PrimaryButton from "@/Components/PrimaryButton.jsx";
import {useForm} from "@inertiajs/react";



export default function CancelAppointment({appointmentId}){
    const {patch} = useForm({appointment: appointmentId});
    const cancelAppointment = (e) =>{
        e.preventDefault();
        patch(route('appointment.cancel',appointmentId));
    }

    return (
        <PrimaryButton className='bg-red-700' onClick={cancelAppointment}>Cancel</PrimaryButton>
    )
}
