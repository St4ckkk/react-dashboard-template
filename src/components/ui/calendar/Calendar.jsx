import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Container from "@components/ui/container/Container";

const CustomCalendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());

    // Get the first day of the month
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

    // Calculate days from previous month to show
    const firstDayOfWeek = firstDayOfMonth.getDay(); // 0 = Sunday, 1 = Monday, etc.

    // Calculate days from next month to show to complete the grid
    const daysInMonth = lastDayOfMonth.getDate();
    const totalCells = 42; // 6 weeks * 7 days

    const daysFromPrevMonth = firstDayOfWeek;
    const daysFromNextMonth = totalCells - (daysFromPrevMonth + daysInMonth);

    const prevMonthLastDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();

    const days = [];

    // Previous month days
    for (let i = daysFromPrevMonth - 1; i >= 0; i--) {
        days.push({
            day: prevMonthLastDay - i,
            currentMonth: false,
            date: new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, prevMonthLastDay - i)
        });
    }

    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
        days.push({
            day: i,
            currentMonth: true,
            date: new Date(currentDate.getFullYear(), currentDate.getMonth(), i)
        });
    }

    for (let i = 1; i <= daysFromNextMonth; i++) {
        days.push({
            day: i,
            currentMonth: false,
            date: new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, i)
        });
    }

    const handlePrevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    const handleNextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };

    const handleToday = () => {
        setCurrentDate(new Date());
    };

    const isToday = (date) => {
        const today = new Date();
        return date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear();
    };

    const isSelected = (date) => {
        return date.getDate() === selectedDate.getDate() &&
            date.getMonth() === selectedDate.getMonth() &&
            date.getFullYear() === selectedDate.getFullYear();
    };

    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return (
        <Container className="w-full p-5">
            <div className="border-l-4 border-deep-blue pl-2 ">
                <h2 className="text-3xl">
                    <span className="font-bold">St4ckkk</span> Calendar
                </h2>
            </div>

            <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                    <button
                        onClick={handlePrevMonth}
                        className="h-10 w-10 rounded-md hover:bg-gray-100 flex items-center justify-center"
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </button>

                    <div className="text-xl font-semibold">
                        {new Intl.DateTimeFormat('en-US', {
                            month: 'long',
                            year: 'numeric'
                        }).format(currentDate)}
                    </div>

                    <div className="flex gap-2">
                        <button
                            onClick={handleNextMonth}
                            className="h-10 w-10 rounded-md hover:bg-gray-100 flex items-center justify-center"
                        >
                            <ChevronRight className="h-5 w-5" />
                        </button>

                        <button
                            onClick={handleToday}
                            className="h-10 px-4 hover:bg-gray-100"
                        >
                            Today
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-7">
                    {weekdays.map(day => (
                        <div
                            key={day}
                            className="text-center py-2 text-sm font-medium text-gray-500"
                        >
                            {day}
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-7">
                    {days.map((day, index) => (
                        <div
                            key={index}
                            className={` ${index % 7 === 6 ? '' : 'border-r-0'} ${Math.floor(index / 7) === 5 ? '' : 'border-b-0'
                                } text-center h-11`}
                            onClick={() => setSelectedDate(day.date)}
                        >
                            <button
                                className={`h-11 w-full ${!day.currentMonth ? 'text-gray-400' : 'text-gray-900'
                                    } ${isSelected(day.date) ? 'bg-deep-blue text-white' : ''
                                    } ${isToday(day.date) && !isSelected(day.date) ? 'bg-deep-blue text-white' : ''
                                    } hover:bg-light-blue hover:text-white transition-colors`}
                            >
                                {day.day}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default CustomCalendar;