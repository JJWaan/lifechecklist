import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";

import NewCard from "./NewCard";
import UserCard from "./user/UserCard";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

// let mainstate: {
//     taskData: any | null;
//     initialized: boolean;
//     saving: boolean;
// } = {
//     taskData: null,
//     initialized: false,
//     saving: false,
// };

let mainstate = {
    taskData: null,
    initialized: false,
    saving: false,
};

// reducer, state management
const reducer = (state: any, action: any) => {
    switch (action.type) {
        // initialize state on first load (useEffect):
        case "INIT_DATA":
            console.log("init data reducer case");
            return {
                ...state,
                taskData: action.payload.taskData,
                initialized: action.payload.initialized,
            };

        default:
            return state;
    }
};

type Task = {
    task_id: number;
    task_text: string;
    task_date: string;
    task_complete: boolean;
};

const MainContentRenderArea = () => {
    const [state, dispatch] = useReducer(reducer, mainstate);
    const [showAddCard, setShowAddCard] = useState(false);
    const [animActive, setAnimActive] = useState(false);

    useEffect(() => {
        const getDB = async () => {
            try {
                let initialData = await axios.get(
                    "http://localhost:8080/tasks"
                );
                // console.log("i data:", initialData);
                dispatch({
                    type: "INIT_DATA",
                    payload: {
                        taskData: initialData.data,
                        initialized: true,
                    },
                });
            } catch (error) {
                console.log("data initialization failed:", error);
            }
        };
        getDB();
    }, []);

    const tasks = state.taskData?.map((item: Task, index: number) => {
        return <UserCard task={item} key={index} />;
    });

    const element = document.getElementById("big-orange-btn");
    {
        animActive
            ? element?.classList.add("move-left")
            : element?.classList.remove("move-left");
    }

    // const inputti = document.getElementById("input-container");
    // {
    //     animActive
    //         ? inputti?.classList.add("input-fadein")
    //         : inputti?.classList.remove("input-fadein");
    // }

    const getInputLoota = () => {
        const inputti = document.getElementById("input-container");
        {
            animActive
                ? inputti?.classList.add("input-fadein")
                : inputti?.classList.remove("input-fadein");
        }
    };

    setTimeout(getInputLoota, 250);

    const handleClick = () => {
        setShowAddCard(!showAddCard);
        setAnimActive(!animActive);
    };

    return (
        <>
            <main>
                <div className="add-card-container">
                    <div
                        id="big-orange-btn"
                        className="add-card-icon"
                        onClick={handleClick}
                    >
                        {!showAddCard ? (
                            <AddCircleOutlineIcon sx={{ fontSize: 120 }} />
                        ) : (
                            <RemoveCircleOutlineIcon sx={{ fontSize: 120 }} />
                        )}
                    </div>
                    {showAddCard ? <NewCard /> : null}
                    {/* <NewCard /> */}
                </div>
                <div className="cards-container">{tasks}</div>
            </main>
        </>
    );
};

export default MainContentRenderArea;
