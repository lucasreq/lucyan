import React from 'react';
import firebase from "../firebase";
import { Form } from 'react-bootstrap';

export default function Materials() {
    const [materiaux, setMateriaux] = React.useState([]);

    React.useEffect(() => {
        const fetchData = async () => {
        const db = firebase.firestore();
        db.collection("materiaux")
            .onSnapshot(function(data) {
            setMateriaux(data.docs.map(doc => ({ ...doc.data(), id: doc.id})))
            });
        }
        fetchData();
    },[]);

    return (
        <Form.Control as="select">
                {
                materiaux.map(spell =>
                <option key={spell.id}>
                {spell.name}
                </option>  
                )}
            
        </Form.Control>
    )
}
