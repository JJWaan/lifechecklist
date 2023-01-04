import React from "react";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

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
    console.log(props);
    return (
        <>
            <div className="single-card-container">
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
                            Yes
                        </Button>
                        <Button
                            size="small"
                            variant="outlined"
                            endIcon={<DoNotDisturbIcon />}
                        >
                            No
                        </Button>
                    </CardActions>
                </Card>
            </div>
        </>
    );
};

export default UserCard;
