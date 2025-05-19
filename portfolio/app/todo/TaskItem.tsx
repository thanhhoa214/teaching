'use client'

import { useContext } from "react";
import { AppInfoContext } from "../context/UserContext";

interface TaskProps {
    title: string;
    time: string;
}

export function TaskItem(props: TaskProps) {
    const appInfoData = useContext(AppInfoContext)
    return (
        <li className="bg-white my-2 p-2 flex justify-between">
            <div>
                <span className="size-4 inline-block bg-red-500 rounded mx-1"></span>
                {props.title}
            </div>
            <p>{appInfoData?.userInfo.age}</p>
            <div>
                <span className="bg-gray-200 p-0.5">{props.time}</span>
                <span className="bg-gray-200 p-0.5">︙</span>
            </div>
        </li>
    );
}


