import Input from "@mui/material/Input";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import CheckIcon from "@mui/icons-material/Check";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const NewCard = () => {
    return (
        <>
            <div className="new-card-input-container">
                {/* <Box
                    component="form"
                    sx={{
                        "& .MuiTextField-root": { m: 1, width: "25ch" },
                    }}
                    noValidate
                    autoComplete="off"
                > */}
                <div className="new-card-inputfield">
                    <Input
                        autoFocus
                        type="text"
                        placeholder="What ya wanna do?"
                    />
                </div>
                <div className="new-card-input-icon">
                    <CheckCircleOutlineIcon sx={{ fontSize: 40 }} />
                </div>
                {/* </Box> */}
            </div>
        </>
    );
};

export default NewCard;
