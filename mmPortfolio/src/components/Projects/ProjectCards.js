import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Pantry from '../../images/Pantry.png'
import PhotoPortfolio from '../../images/PhotoPortfolio.png'
import NeoCardSS from '../../images/NeoCardSS.png'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {CardWrapper} from './ProjectElements'
const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    margin:'10px',
    background: 'white',
    boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
    borderRadius: '10px',
    border: '2px solid rgba( 255, 255, 255, 0.18 )',
  },
  media: {
    height: 240,
  },
});

export default function ProjectCards() {
  const classes = useStyles();

  return (
    <CardWrapper style={{display:'flex',justifyConten:'space-between'}}>
      <Card className={classes.root}>
        <CardActionArea href='https://github.com/mattmagnotta/Project-Pantry'>
          <CardMedia
            className={classes.media}
            image={Pantry}
            title="Pantry"
          />
          <CardContent>
            <Typography style={{textAlign:'center' }} gutterBottom variant="h5" component="h2">
              Pantry
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Keeps a running inventory of ingredients you have in your kitchen. Then it allows you to search for detailed recipes you can make with the on hand ingredients. --
                Tech Stack: Python, Django, Javascript, Axios, CSS, HTML
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button style={{margin:'0 auto' }} size="small" color="primary" href='https://github.com/mattmagnotta/Project-Pantry'>
            Learn More
          </Button>
        </CardActions>
      </Card>
      <Card className={classes.root}>
        <CardActionArea href='https://aqueous-gorge-46064.herokuapp.com/'>
          <CardMedia
            className={classes.media}
            image={PhotoPortfolio}
            title="Photography Portfolio"
          />
          <CardContent>
            <Typography gutterBottom variant="h5"  style={{textAlign:'center' }} component="h2">
              Photography Portfolio
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              A place to display my photography skills, while also showing off more of my design skills. -- Tech Stack: React, Javascript, Material Ui, ,React Bootstrap, React Router, CSS & HTML
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button style={{margin:'0 auto' }} size="small" color="primary" href='https://aqueous-gorge-46064.herokuapp.com/'>
            Learn More
          </Button>
        </CardActions>
      </Card>
      <Card className={classes.root}>
        <CardActionArea href="https://github.com/bgonzalez262/bizzcard">
          <CardMedia
            className={classes.media}
            image={NeoCardSS}
            title="Neo Card"
          />
          <CardContent>
            <Typography style={{textAlign:'center' }} gutterBottom variant="h5" component="h2">
              NeoCard
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Acts as a centralized hub, containing information about you and your business, along with some other added benefits. --  Tech Stack: React, Javascript, Express, Node.js, Material Ui, React Router, MongoDB
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button style={{margin:'0 auto' }} size="small" color="primary" href='https://github.com/bgonzalez262/bizzcard'>
            Learn More
          </Button>
        </CardActions>
      </Card>
    </CardWrapper>

  );
}
