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

const cards = [1,2,3,4,5,6,7,8,9];

const UserCard = () => {
    return (
        <>
            <div>
                <Container maxWidth="md">
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
                                <Card variant="outlined">
                                    <CardActionArea>
                                    <CardMedia
                                        component='image'
                                        height="140"
                                        // sx={{height: 140}}
                                        // image="dummy_img/contemplative-reptile.jpg"
                                    />
                                    <CardContent>
                                        <Typography variant='h5' gutterBottom>
                                            Card content title
                                        </Typography>
                                        <Typography variant='body2'>
                                            Card content text
                                        </Typography>
                                    </CardContent>
                                    </CardActionArea>
                                        <CardActions>
                                            <Button size="small">Yes</Button>
                                            <Button size="small">No</Button>
                                            <Button
                                                onClick={() => {
                                                    alert('clicked');
                                                }}
                                            >
                                                Click me
                                            </Button>
                                        </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </div>
        </>
    );
}

export default UserCard;