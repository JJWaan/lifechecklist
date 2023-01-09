import React, { useEffect, useReducer, useState, useContext } from "react";
import axios from "axios";
import { Konteksti } from "../App";

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
    rerender: false,
    tarkkailija: false,
};

// reducer action types
const ACTIONS = {
    INITDATA: "INIT_DATA",
    RERENDER: "RE_RENDER",
    NEWPOST: "NEW_POST",
};

// reducer, state management
const reducer = (state: any, action: any) => {
    switch (action.type) {
        // initialize state on first load (useEffect):
        case ACTIONS.INITDATA:
            console.log("init data reducer case");
            return {
                ...state,
                taskData: action.payload.taskData,
                initialized: action.payload.initialized,
            };
        // these below are not used at the moment:
        // case ACTIONS.RERENDER:
        //     console.log("rr data reducer case");
        //     return {
        //         rerender: action.payload.rerender,
        //         tarkkailija: false,
        //     };
        // case ACTIONS.NEWPOST:
        //     console.log("new post reducer case");
        //     return {
        //         tarkkailija: action.payload.tarkkailija,
        //     };

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

    const masterContext = useContext(Konteksti);

    useEffect(() => {
        const getDB = async () => {
            try {
                const url = "http://localhost:8080/tasks";
                let initialData = await axios.get(url);
                dispatch({
                    type: ACTIONS.INITDATA,
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
    }, [masterContext?.flag]);

    const tasks = state.taskData?.map((item: Task, index: number) => {
        return <UserCard task={item} key={index} />;
    });

    const element = document.getElementById("big-orange-btn");
    {
        animActive
            ? element?.classList.add("move-left")
            : element?.classList.remove("move-left");
    }

    const getInputLoota = () => {
        const inputti = document.getElementById("input");
        {
            animActive
                ? inputti?.classList.add("input-fadein")
                : inputti?.classList.remove("input-fadein");
        }
    };

    setTimeout(getInputLoota, 100);

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
                    {showAddCard ? <NewCard korttiauki={showAddCard} /> : null}
                </div>
                <div className="cards-container">{tasks}</div>
            </main>
        </>
    );
};

export default MainContentRenderArea;
