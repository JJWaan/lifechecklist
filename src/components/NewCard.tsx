import { useState } from "react";
import axios from "axios";

import Input from "@mui/material/Input";
import CheckIcon from "@mui/icons-material/Check";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const NewCard = () => {
    const [inputText, setInputText] = useState({ task: "" });

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setInputText({ ...inputText, [name]: value });
    };

    const handleClick = async (event: React.MouseEvent<HTMLDivElement>) => {
        console.log("click", event);
        try {
            if (inputText.task.length < 1) {
                throw new Error();
            }
            await axios.post("http://localhost:8080/tasks", {
                task: inputText.task,
            });
            console.log("POST ok");
            setInputText({ task: "" });
        } catch (error) {
            console.log("Catch block:", error);
        }
    };

    return (
        <>
            <div className="new-card-input-container" id="input">
                <div className="new-card-inputfield">
                    <Input
                        autoFocus
                        type="text"
                        name="task"
                        placeholder="What ya wanna do?"
                        onChange={handleInput}
                    />
                </div>
                <div className="new-card-input-icon" onClick={handleClick}>
                    <CheckIcon sx={{ fontSize: 40 }} />
                </div>
            </div>
        </>
    );
};

export default NewCard;
