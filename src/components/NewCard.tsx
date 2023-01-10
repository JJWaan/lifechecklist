import { useState, useContext } from "react";
import axios from "axios";

import { Konteksti } from "../App";

import Input from "@mui/material/Input";
// import CheckIcon from "@mui/icons-material/Check";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

// type ContextProps = {
//     flag: boolean;
//     setFlag: () => void;
// };

type NewCardProps = {
    korttiauki: boolean;
};

const NewCard = (props: NewCardProps) => {
    const masterContext = useContext(Konteksti);
    console.log(masterContext);

    const [inputText, setInputText] = useState({ task: "" });

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setInputText({ ...inputText, [name]: value });
    };

    const handleClick = async (event: React.MouseEvent<HTMLDivElement>) => {
        try {
            const url = "http://localhost:8080/tasks";
            if (inputText.task.length < 1) {
                throw new Error();
            }
            await axios.post(url, {
                task: inputText.task,
            });
            setInputText({ task: "" });
            console.log("POST ok");
        } catch (error) {
            console.log("Catch block:", error);
        }
        // kind of useless because of how this component is being conditionally rendered,
        // but i'm keeping this if-statement&prop here for possible future component render's modification
        if (props.korttiauki) {
            masterContext?.setFlag(!masterContext.flag);
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
                        value={inputText.task}
                        onChange={handleInput}
                    />
                </div>
                <div className="new-card-input-icon" onClick={handleClick}>
                    <CheckCircleOutlineIcon sx={{ fontSize: 40 }} />
                </div>
            </div>
        </>
    );
};

export default NewCard;
