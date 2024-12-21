import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import {useForm} from "@inertiajs/react";
import InputError from "@/Components/InputError.jsx";
import InputLabel from "@/Components/InputLabel.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import { Calendar, dayjsLocalizer } from 'react-big-calendar'
import dayjs from 'dayjs';
import {useCallback, useState} from "react";
import timezone from 'dayjs/plugin/timezone'
dayjs.extend(timezone)


export default function Create({appointments}) {
    const djLocalizer = dayjsLocalizer(dayjs)
    const minDay = new Date()
    const maxDay = new Date()
    const {post,data,setData,processing,errors} = useForm({
        title:'',
        start_date_time:'',
        end_date_time:''
    })

    const [view, setView] = useState('week')
    const onView = useCallback((newView) => setView(newView), [setView])

    const [myEvents, setEvents] = useState(appointments.map((appointment) => {
        return {
            id: appointment.id,
            title: appointment.title,
            start: new Date(dayjs(appointment.start)),
            end: new Date(dayjs(appointment.end))
        };
    }))
    const handleSelectSlot = useCallback(
        ({ start, end }) => {
            const title = window.prompt('New Event Name')
            if (title) {
                createAppointment(title,start,end)
                setEvents((prev) => [...prev, { start, end, title }])
            }
        },
        [setEvents]
    )

    const createAppointment = (title,start,end) =>{
        data.start_date_time = start
        data.end_date_time = end
        data.title = title
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
                            <div className="p-2 text-center text-lg">
                                <InputError message={errors.available} className="mt-2" />
                            </div>

                            <div>
                                <Calendar
                                    dayLayoutAlgorithm='no-overlap'
                                    localizer={djLocalizer}
                                    events={myEvents}
                                    startAccessor="start"
                                    endAccessor="end"
                                    onView={onView}
                                    view={view}
                                    toolbar={false}
                                    selectable
                                    onSelectSlot={handleSelectSlot}
                                    style={{ height: 500 }}
                                    min={minDay.setHours(8,0,0,0)}
                                    max={maxDay.setHours(18,0,0,0)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
