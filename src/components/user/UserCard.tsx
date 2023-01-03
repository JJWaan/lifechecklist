import React from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import SendIcon from '@mui/icons-material/Send';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';

const cards = [1,2,3,4,5,6,7,8,9,10,11,12];

const UserCard = () => {
    return (
        <>
            <div className='user-card-container'>
                {/* <Container maxWidth="md"> */}
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid
                                item
                                key={card}
                                xs={12}
                                sm={6}
                                md={4}
                                lg={3}
                            >
                                <Card variant="outlined" sx={{maxWidth: 240}}>
                                    <CardActionArea>
                                        {/* <CardMedia
                                            component='img'
                                            sx={{height: 140}}
                                            src="/dummy_img/contemplative-reptile.jpg"
                                            
                                        /> */}
                                        <CardContent>
                                            <Typography variant='h5' gutterBottom color="primary">
                                                Card content title
                                            </Typography>
                                            <Typography variant='body2' paragraph>
                                                Card content text
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
                        ))}
                    </Grid>
                {/* </Container> */}
            </div>
        </>
    );
}

export default UserCard;