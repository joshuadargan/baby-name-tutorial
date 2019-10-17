import React from 'react';
import './App.css';
import NamesList from './components/NamesList'
import Credit from './components/Credit'
import Search from './components/Search'
import ShortList from './components/ShortList';

function arrayRemove(arr, value) {
  return arr.filter(function(ele){
      return ele !== value;
  })
}

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      filterText: '',
      favorites: []
    }
  }

  filterUpdate(value) {
    this.setState({
      filterText: value
    });
  }



  removeFavorite(id) {
    console.log("before remove", this.state.favorites);
    this.setState({
      favorites: arrayRemove(this.state.favorites, id)
    })
    console.log("after", this.state.favorites);
  }

  addFavorite(id) {
    console.log('id to add to fav:', id);
    const favList = this.state.favorites.concat([id]);
    this.setState({
      favorites: favList
    })
  }

  render() {
    return (
      <div>
        <Search 
          filterText={this.state.filterText}
          filterUpdate={this.filterUpdate.bind(this)}
        />
        <main>
          <ShortList
            favorites={this.state.favorites}
            data={this.props.data}
            removeFavorite={this.removeFavorite.bind(this)}
          />
          <NamesList 
            favorites={this.state.favorites}
            data={this.props.data} 
            filterText={this.state.filterText}
            addFavorite={this.addFavorite.bind(this)}
          />
          <Credit />
        </main>
      </div>
    )
  }
  
}

export default App;
