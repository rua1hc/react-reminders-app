import React from "react";
import Reminder from "../models/reminder";

interface ReminderListProps {
    items: Reminder[];
    onDeleteReminder: (id: number) => void;
}

export default function ReminderList({
    items,
    onDeleteReminder,
}: ReminderListProps): JSX.Element {
    return (
        <div>
            <ul className="list-group ">
                {items.map((item) => (
                    <li
                        className="list-group-item d-flex justify-content-between "
                        key={item.id}
                    >
                        <span>{item.title}</span>
                        <button
                            className="btn btn-small btn-outline-danger rounded-pill "
                            onClick={() => onDeleteReminder(item.id)}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
