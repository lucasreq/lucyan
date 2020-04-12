import React from 'react';
import firebase from "../firebase";
import {Button,Row,Container,Col,Form,Navbar,Table} from 'react-bootstrap';

function AdminPage() {
  const [tasks, setTasks] = React.useState([]);
  const [newTask, setNewTask] = React.useState('');
  const [updateTask, setUpdateTask] = React.useState('');

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
    db.collection("sacs").add({name: newTask});
  }

  const onDelete = (id) => {
    const db = firebase.firestore()
    db.collection("sacs").doc(id).delete()
  }

  const onUpdate = (id) => {
    const db = firebase.firestore()
    db.collection("sacs").doc(id).set({name:updateTask})
  }
  
  return(
    <div>
      <Navbar bg = "dark" variant="dark">
        <Navbar.Brand href="#home">
          Page ajout de sac
        </Navbar.Brand>
      </Navbar>
      <br></br>

      <Container>
        <Row>
          <Col>
            <h2>Ajouter un sac</h2>

            <Form>
              <Form.Group controlId = "formBasicCheckbox">
                <Form.Control type="text" value={newTask} onChange={e =>setNewTask(e.target.value)}/>
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
                  <th>ID</th>
                  <th>Name</th>
                  <th>Supprimer un sac</th>
                  <th>Modifier un sac</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map(spell => (
                  <tr key = {spell.id}>
                    <td>{spell.id}</td>
                    <td>{spell.name}</td>
                    <td>
                      <Button variant="danger" onClick={() => onDelete(spell.id)}>Delete Task</Button>
                    </td>
                    <td>
                      <input type="text"  className=" " placeholder={spell.name} onChange={e => setUpdateTask(e.target.value)}></input>
                      <Button className="text-white ml-4" variant="warning" onClick={() => onUpdate(spell.id)}>updateTask</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default AdminPage;