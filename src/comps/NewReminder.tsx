import React from "react";

export default function NewReminder() {
    return (
        <div className="input-group mb-2">
            <input
                type="text"
                className="form-control"
                placeholder="Recipient's username"
            />
            <button
                className="btn btn-outline-primary rounded-pill ms-3 me-2 px-4"
                type="button"
            >
                Add
            </button>
        </div>
    );
}
