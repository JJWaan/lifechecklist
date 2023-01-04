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

const UserCard = (props: any) => {
    console.log(props);
    return (
        <>
            {/* <div className='user-card-container'> */}
            <Container maxWidth="md">
                <Grid container spacing={4}>
                    {/* {cards.map((card) => ( */}
                    <Grid item key={props.task_id} xs={12} sm={6} md={4} lg={3}>
                        <Card sx={{ maxWidth: 240 }}>
                            <CardActionArea>
                                {/* <CardMedia
                                            component='img'
                                            sx={{height: 140}}
                                            src="/dummy_img/contemplative-reptile.jpg"
                                            
                                        /> */}
                                <CardContent>
                                    <Typography
                                        variant="body1"
                                        gutterBottom
                                        color="primary"
                                    >
                                        {props.taskData[0].task_date}
                                    </Typography>
                                    <Typography variant="body2" paragraph>
                                        {props.taskData[0].task_text}
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
                    </Grid>
                    {/* ))} */}
                </Grid>
            </Container>
            {/* </div> */}
        </>
    );
};

export default UserCard;
