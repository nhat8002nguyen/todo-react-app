import React from "react";
import TodoItem from "./elements/TodoItem";

export default function ItemList() {
    const data = [
        {
            name: "item 1"
        },
        {
            name: "item 1"
        },
        {
            name: "item 1"
        }
    ];
    return (
        <div className="itemList">
            <ul>
                {data.map((item, index) => (
                    <TodoItem key={index} name={item.name} />
                ))}
            </ul>
        </div>
    );
}
