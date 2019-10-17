import React, {Component} from 'react';

class NamesList extends Component {
    render() {
    
        const { data, filterText, addFavorite } = this.props;

        const namesList = data
           .filter(name => {
               //Remove names not containing the filterText string
                return name.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
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