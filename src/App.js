import React from 'react';
import './App.css';
import axios from 'axios';


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      data: [],
      liste : [ {
        id : 1,
        nom : "sucre",
        prix: 5,
        quantite: 1000
        },
        {
        id : 2,
        nom : "Lait",
        prix: 2,
        quantite: 400
        },
        {
        id : 3,
        nom : "Biscuit",
        prix: 1.50,
        quantite: 8000
        },
        {
        id : 4,
        nom : "Fero Rocher",
        prix: 8,
        quantite: 4 + 'paquet'
        },
        {
        id : 5,
        nom : "Tête Brulé",
        prix: 3,
        quantite: 2 + 'sachet'
        },
        {
        id : 5,
        nom : "Nutella",
        prix: 4,
        quantite: 4
        },
      ]
    }
  }

  componentDidMount(props){
    // fetch('http://newsapi.org/v2/top-headlines?country=fr&apiKey=107c91aec1ee43d18f78d9bf72e32b8d')
    // .then((response) => {
    //   return response.json()
    // })
    // .then((result) => {
    //   console.log(result)
    //   this.setState({
    //     data: result.articles
    //   })
    //   console.log("test", typeof result.articles)
    // })

    axios.get('http://newsapi.org/v2/top-headlines?country=fr&apiKey=107c91aec1ee43d18f78d9bf72e32b8d')
    .then((response) => {
        this.setState({data: response.data.articles})
        console.log("data2", this.state.data)
  })

  }

  render() {
    console.log("Wesh",this.state.data)
    return(
      <div>
      <h2>Liste des courses</h2>
      <ul>
      {
        this.state.data.map(data => (
          <li key={data.id}>{data.title}</li>
        ))
      }
      </ul>
        <p>
        
        </p>
      </div>
    )
  }
}

export default App;
