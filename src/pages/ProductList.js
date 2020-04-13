
import React from 'react';
import '../App.css';
import firebase from "../firebase";

import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ProductList() {
  const [sacs, setSacs] = React.useState([]);
  const [modalShow, setModalShow] = React.useState(false);
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

  let isLiked = false;

  const liked = (id) => {
    const db = firebase.firestore()
    const increment = firebase.firestore.FieldValue.increment(1);
    const productRef = db.collection('sacs').doc(id);
    isLiked = true;
    productRef.doc(id).update({likes: increment})
  }

  const unLiked = (id) => {
    const db = firebase.firestore()
    const decrement = firebase.firestore.FieldValue.increment(-1);
    const productRef = db.collection('sacs').doc(id);
    productRef.doc(id).update({likes: decrement})
  }

  return (
    <Container>
      <div className="row">
        {sacs.map(spell =>(
          <div key ={spell.id} className="col-9 mx-auto col-md-6 col-lg-3 my-3">
            <div className="card">
              <Card className={classes.root}>
                <CardActionArea onClick={() => setModalShow(true)}>
                  <CardMedia
                  component="img"
                  alt="sac"
                  height="140"
                  image={spell.img}
                  title="sac"
                  className="img-container"
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
                    <Button size="small" color="primary" onClick={() => setModalShow(true)}>
                      voir plus
                    </Button>
                    <Button size="small" color="primary" onClick={liked}>
                      <svg class="bi bi-heart" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 01.176-.17C12.72-3.042 23.333 4.867 8 15z" clip-rule="evenodd"/>
                      </svg>
                      <p>{spell.likes}</p>
                    </Button>
                </CardActions>
                <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
              </Card>
            </div>
          </div>
          ))}
        </div>

        <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      </Container>
        
        );
      }
      