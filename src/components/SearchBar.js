import React, { Component } from 'react'
import SearchResultAllCategory from './AllCategoryResult'
import Home from './Home'
import SearchResultPfe from './PfeResult'
import SearchResultsMemoires from './MemoiresResults'
import Results from './Results'


export class SearchBar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             category: ""
        }
    }

    handleUsernameChange = (event) =>{
        this.setState({
            username: event.target.value
        })
    }

    handleCategoryChange = (event) =>{
        this.setState({
            category: event.target.value
        })
    }
    
    render() {
        return (
            <div>
                <div className="container">
                    {/* Search Bar */}
                    
                        <form className="m-5">
                        <div className="form-row">
                            <div className="form-group col-md-3">
                                <select id="inputState" className="form-control" value={ this.state.category } onChange={ this.handleCategoryChange }>
                                    <option value="allCategory" selected>Tous les categories</option>
                                    <option value="livre">Livres</option>
                                    <option  value="pfe">PFE</option>
                                    <option value="memoire">Mémoires</option>
                                    <option value="article_de_recherche">Articles</option>
                                </select>
                            </div>
                            <div className="form-group col-md-7 ">
                                <input type="text" className="form-control" id="inputCity" placeholder="Rechercher..."/>
                            </div>
                            <div className="form-group col-md-2">
                                <button className="btn btn-secondary">
                                    Search
                                </button>
                            </div>
                        </div>
                        </form>            
                    
                    {/* End Search BAR */}
                    <Results category={ this.state.category }/>
                </div>

            </div>
        )
    }
}

export default SearchBar


///  search bar + category['pfe','memoires','livres','publication']
///  home  ==> results ['pfe','memoires','livres','publication']

//Pages 
// 1 home     
// Suivant le category on affiche la page concerne
//     