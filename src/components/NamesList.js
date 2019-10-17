import React, {Component} from 'react';

class NamesList extends Component {
    render() {
    
        const { data, filterText, addFavorite, favorites } = this.props;

        const namesList = data
           .filter((name,id) => {
               //Remove names not containing the filterText string and names in favorites
                return name.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0 && favorites.indexOf(id) === -1
           })
           .map(name => {
                return (
                <li 
                    key= {name.id} 
                    className={name.sex}
                    onClick={() => addFavorite(name.id)}
                >{name.name}</li>
          );
        });
    
    
        return (
        
          <div className="App">
              <ul>
                {namesList}
              </ul>
          </div>
        );
    }
}
export default NamesList;