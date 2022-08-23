import React, { useState } from "react";

interface NewReminderProps {
    onAddReminder: (title: string) => void;
}

export default function NewReminder({
    onAddReminder,
}: NewReminderProps): JSX.Element {
    const [title, setTitle] = useState("");

    const submitFrom = async (e: React.FormEvent) => {
        e.preventDefault();
        // console.log(title);

        if (!title) return;
        onAddReminder(title);
        setTitle("");
    };

    return (
        <form className="input-group mb-2" onSubmit={submitFrom}>
            <input
                type="text"
                className="form-control"
                placeholder="New title here..."
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />
            <button
                className="btn btn-outline-primary rounded-pill ms-3 me-2 px-4"
                type="submit"
            >
                Add
            </button>
        </form>
    );
}
