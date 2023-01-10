import React, { useContext } from "react";
import axios from "axios";

import { Konteksti } from "../../App";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

import SendIcon from "@mui/icons-material/Send";
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";

// task_complete: true;
// task_date: "2023-01-01T22:00:00.000Z";
// task_id: "1";
// task_text: "new task";

type TaskProps = {
    task: {
        task_complete: boolean;
        task_date: string;
        task_id: number;
        task_text: string;
    };
};

const UserCard = (props: TaskProps) => {
    // console.log(props);
    const masterContext = useContext(Konteksti);

    const handleClick = () => {
        console.log("click", props.task.task_id);
    };

    const [openDeleteAlert, setOpenDeleteAlert] = React.useState(false);

    const handleClickOpen = () => {
        setOpenDeleteAlert(true);
    };

    const handleClose = () => {
        setOpenDeleteAlert(false);
    };

    const handleDeletion = async () => {
        try {
            const id = props.task.task_id;
            const url = `http://localhost:8080/tasks/${id}`;
            await axios.delete(url);
            console.log("DEL ok");
            handleClose();
            masterContext?.setFlag(!masterContext.flag);
        } catch (error) {
            console.log("Catch block:", error);
        }
    };

    return (
        <>
            <div className="single-card-container" onClick={handleClick}>
                <Card>
                    <CardActionArea>
                        <CardContent>
                            <Typography
                                variant="body1"
                                gutterBottom
                                color="primary"
                            >
                                {props.task.task_date}
                            </Typography>
                            <Typography variant="body2" paragraph>
                                {props.task.task_text}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button
                            size="small"
                            variant="contained"
                            endIcon={<SendIcon />}
                        >
                            Edit
                        </Button>
                        <Button
                            size="small"
                            variant="outlined"
                            onClick={handleClickOpen}
                            endIcon={<DoNotDisturbIcon />}
                        >
                            Delete
                        </Button>
                    </CardActions>
                    <Dialog
                        open={openDeleteAlert}
                        onClose={handleClose}
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                You sure? Deletion is permanent
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button onClick={handleDeletion} autoFocus>
                                Yep
                            </Button>
                        </DialogActions>
                    </Dialog>
                </Card>
            </div>
        </>
    );
};

export default UserCard;
