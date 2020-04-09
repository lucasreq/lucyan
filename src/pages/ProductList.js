
import React from 'react';
import '../App.css';
import firebase from "../firebase";

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ProductList() {
  const [sacs, setSacs] = React.useState([]);
  const classes = useStyles();

  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      db.collection("sacs")
        .onSnapshot(function(data) {
          setSacs(data.docs.map(doc => ({ ...doc.data(), id: doc.id})))
        });
    }
    fetchData();
  },[]);

  return (
    <Container>
      {sacs.map(spell =>(
        <div key ={spell.id} className="row">
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
              component="img"
              alt="sac"
              height="140"
              image={spell.img}
              title="sac"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {spell.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {spell.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                  voir plus
                </Button>
                <Button size="small" color="primary">
                  <svg class="bi bi-heart" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                   <path fill-rule="evenodd" d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 01.176-.17C12.72-3.042 23.333 4.867 8 15z" clip-rule="evenodd"/>
                  </svg>
                </Button>
            </CardActions>
          </Card>
        </div>
        ))}
      </Container>
        
        );
      }
      