import React, { useEffect, useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Reminder from "./models/reminder";
import ReminderList from "./comps/ReminderList";
import reminderServ from "./services/reminder";
import NewReminder from "./comps/NewReminder";

// const _reminders: Reminder[] = [{ id: 1, title: "reminder 1" }];

function App() {
    let [reminders, setReminders] = useState<Reminder[]>([]);

    useEffect(() => {
        loadReminders();
    }, []);

    const loadReminders = async () => {
        const reminders = await reminderServ.getReminders();
        setReminders(reminders);
    };

    const deleteReminder = async (id: number) => {
        // const reminder = await reminderServ.deleteReminder(id);
        setReminders(reminders.filter((reminder) => reminder.id !== id));
    };

    return (
        <div className="App">
            <NewReminder />
            <ReminderList items={reminders} onDeleteReminder={deleteReminder} />
        </div>
    );
}

export default App;
