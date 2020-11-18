import React, { Component } from 'react';
import SearchResultAllCategory from './AllCategoryResult';
import Home from './Home';
import SearchResultPfe from './PfeResult';
import SearchResultsMemoires from './MemoiresResults';
import Results from './Results';
import elasticsearch from 'elasticsearch';
import axios from 'axios'


export class SearchBar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             type_document: "allDocument",
             input:"",
             searchResult: {},
        }

      
          
    } //End constructor



    handleInputChange = (event) =>{
        this.setState({
            input: event.target.value
        })
        
        //console.log(this.state.input)

    }

    handleCategoryChange = (event) =>{
        this.setState({
            type_document: event.target.value
        })
        //console.log(event.target.value)
    }

    submitForm = (event) =>{
        event.preventDefault();
        var input_value = this.state.input
        //GET my_index/_search?source_content_type=application/json&source={"query":{"geo_bounding_box":{"location":{"top_left":{"lat":42,"lon":-72},"bottom_right":{"lat":40,"lon":-74}}}}}
        if(this.state.type_document == "allDocument"){
            axios
            .get(`http://localhost:9200/bibliotheque/document_document/_search?q=${input_value}~4`)
            .then((res) => {
                console.log(this.state.type_document)
                this.setState({
                    searchResult: res.data.hits
                })
                console.log(res.data.hits)
            })
        }else{
            axios
            .get(`http://localhost:9200/bibliotheque/document_document/_search?q=${input_value}~4&q=type=${this.state.type_document}`)
            .then((res) => {
                console.log(this.state.type_document)
                this.setState({
                    searchResult: res.data.hits
                })
                console.log(res.data.hits)
            })
        }
        
    }

    
    
    render() {
        return (
            <div>
                <div className="container-fluid">
                    {/* Search Bar */}
                    
                        <form className="m-5" onSubmit={this.submitForm}>
                        <div className="form-row">
                            <div className="form-group col-md-3">
                                <select id="inputState" className="form-control" value={ this.state.type_document } onChange={ this.handleCategoryChange }>
                                    <option value="allDocument" selected>Tous les categories</option>
                                    <option value="livre">Livres</option>
                                    <option  value="pfe">PFE</option>
                                    <option value="memoire">Mémoires</option>
                                    <option value="article">Articles</option>
                                </select>
                            </div>
                            <div className="form-group col-md-7 ">
                                <input type="text" value={this.state.input} onChange={this.handleInputChange}  className="form-control" id="inputCity" placeholder="Rechercher..."/>
                            </div>
                            <div className="form-group col-md-2">
                                <button type="submit" className="btn btn-secondary">
                                    Search
                                </button>
                            </div>
                        </div>
                        </form>            
                    
                    {/* End Search BAR */}
                    <Results type_document={ this.state.type_document } search_doc_result ={ this.state.searchResult }/>
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