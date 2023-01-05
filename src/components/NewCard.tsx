import Input from "@mui/material/Input";

import CheckIcon from "@mui/icons-material/Check";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const NewCard = () => {
    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        console.log("click", event);
    };

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
    };

    return (
        <>
            <div className="new-card-input-container" id="input-container">
                <div className="new-card-inputfield" id="input-container">
                    <Input
                        id="input-container"
                        autoFocus
                        type="text"
                        placeholder="What ya wanna do?"
                        onChange={handleInput}
                    />
                </div>
                <div
                    className="new-card-input-icon"
                    id="input-container"
                    onClick={handleClick}
                >
                    <CheckIcon id="input-container" sx={{ fontSize: 40 }} />
                </div>
            </div>
        </>
    );
};

export default NewCard;
