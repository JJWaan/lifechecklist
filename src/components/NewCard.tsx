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
            <div className="new-card-input-container" id="input">
                <div className="new-card-inputfield">
                    <Input
                        autoFocus
                        type="text"
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
