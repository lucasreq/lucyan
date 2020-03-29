import * as firebase from 'firebase';
import config from'./firebase';
import './App.css';

class Data extends Component {
  constructor() {
    super()

    this.state= {loading: true}
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
  }
  }

  componentWillMount() {
    const SacRef = firebase.database().ref('sac')

    SacRef.on('value', snapshot =>{
      this.setState({
        sac: snapshot.val(),
        loading: false
      })
    })
  }

  render() {
    if (this.state.loading) {
      return(
        //ici tu peu mettre ce que tu veux qui vas signifier que la bdd ne charge pas
        <p>je charge</p>
      )
    }
    var storeProduct = [];
    const sacs = Object.keys(this.state.sac).map(key => {
      var tableaudemerde = {
        id: {key},
        name: {this.state.sac[key].name},
        description: {this.state.sac[key].description},
        price: {this.state.sac[key].price},
        like: {this.state.sac[key].like},
        image: {this.state.sac[key].image}
      }
    })
    return (
      <div>{sacs}</div>
    )
  }
}

export default Data