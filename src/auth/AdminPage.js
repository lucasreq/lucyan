import React from 'react';
import firebase from "../firebase";
import {Button,Row,Container,Col,Form,Navbar,Table} from 'react-bootstrap';

function AdminPage() {
  const [tasks, setTasks] = React.useState([]);

  //Create product
  const [newName, setNewName] = React.useState('');
  const [newPrice, setNewPrice] = React.useState('');
  const [newDescription, setNewDescription] = React.useState('');

  //Update Products
  const [updateName, setUpdateName] = React.useState('');
  const [updatePrice, setUpdatePrice] = React.useState('');
  const [updateDescription, setUpdateDescription] = React.useState('');

  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      db.collection("sacs")
        .onSnapshot(function(data) {
          setTasks(data.docs.map(doc => ({ ...doc.data(), id: doc.id})))
        });
    }
    fetchData();
  },[]);
  

  const onCreate = () => {
    const db = firebase.firestore();
    db.collection("sacs").add({name: newName,img:"img/images.jpg",price: newPrice,description: newDescription,likes: 0});
  }

  const onDelete = (id) => {
    const db = firebase.firestore()
    db.collection("sacs").doc(id).delete()
  }

  const onNameUpdate = (id) => {
    const db = firebase.firestore()
    db.collection("sacs").doc(id).update({name:updateName})
  }
  const onPriceUpdate = (id) => {
    const db = firebase.firestore()
    db.collection("sacs").doc(id).update({price: updatePrice})
  }
  const onDescriptionUpdate = (id) => {
    const db = firebase.firestore()
    db.collection("sacs").doc(id).update({description: updateDescription})
  }
  
  return(
      <Container>
        <Row>
          <Col>
          <h2>Ajouter un sac</h2>

          <Form>
            <span>Name: </span>
            <Form.Group controlId = "formBasicCheckbox">
              <Form.Control type="text" value={newName} onChange={e =>setNewName(e.target.value)}/>
            </Form.Group>
            <span>Price: </span>
            <Form.Group controlId = "formBasicCheckbox">
              <Form.Control type="number" value={newPrice} onChange={e =>setNewPrice(e.target.value)}/>
            </Form.Group>
            <span>Description: </span>
            <Form.Group controlId = "formBasicCheckbox">
              <Form.Control type="text" value={newDescription} onChange={e =>setNewDescription(e.target.value)}/>
            </Form.Group>
            <Button variant="primary" onClick={onCreate}>Ajouter Sac</Button>
          </Form>
          </Col>
        </Row>
        <br></br>

        <Row>
          <Col>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Name</th>
                  <th> </th>
                  <th>Image</th>
                  <th>Price</th>
                  <th> </th>
                  <th>Description</th>
                  <th> </th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map(spell => (
                  <tr key = {spell.id}>
                    <td><input type="text"  className=" " placeholder={spell.name} onChange={e => setUpdateName(e.target.value)}></input></td>
                    <td>
                      <Button className="text-white ml-4" variant="warning" onClick={() => onNameUpdate(spell.id)}>update</Button>
                    </td>
                    <td><img src={spell.img} width='100px'/></td>
                    <td><input type="text"  className=" " placeholder={spell.price} onChange={e => setUpdatePrice(e.target.value)}></input></td>
                    <td>
                      <Button className="text-white ml-4" variant="warning" onClick={() => onPriceUpdate(spell.id)}>update</Button>
                    </td>
                    <td><input type="text"  className=" " placeholder={spell.description} onChange={e => setUpdateDescription(e.target.value)}></input></td>
                    <td>
                      <Button className="text-white ml-4" variant="warning" onClick={() => onDescriptionUpdate(spell.id)}>update</Button>
                    </td>
                    <td>
                      <Button variant="danger" onClick={() => onDelete(spell.id)}>Delete Task</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
  )
}

export default AdminPage;