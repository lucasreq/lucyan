import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import firebase from '../firebase';
import { AuthContext } from "./Auth";

const AdminPrivateRoute = ({ component: RouteComponent, ...rest }) => {
    const [admin, setAdmin] = React.useState([]);
    const {currentUser} = useContext(AuthContext);

    React.useEffect(() => {
        const fetchData = async () => {
          const db = firebase.firestore();
          db.collection("administrateurs")
            .onSnapshot(function(data) {
              setAdmin(data.docs.map(doc => ({ ...doc.data(), id: doc.id})))
            });
        }
        fetchData();
      },[]);
      
    let isAdmin = false;
    let adminid = [];
    const storeAdmin = () => admin.map(spell =>(adminid.push(spell.idadmin)))
    
    storeAdmin();
    if(currentUser){
        if (currentUser.uid == adminid) {
          isAdmin = true;
          console.log("Welcome admin")
        }
        else{
          console.log(adminid)
          console.log('Not an admin')
        }
      }
      else{
        console.log("User disconnected")
      }
  
  return (
    <Route
      {...rest}
      render={routeProps =>
        currentUser.uid == "1JWkggh1OhQfGRED6PXqJN7y3st2"
        ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={"/login"} />
        )
      }
    />
  );
};


export default AdminPrivateRoute