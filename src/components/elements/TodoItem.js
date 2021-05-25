import React from "react";

export default function TodoItem(props) {
    return (
        <div className="todoItem">
            <input type="checkbox" />
            <div className="itemName">
                <p>{props.name}</p>
            </div>
        </div>
    );
}
