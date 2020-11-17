import React, { Component } from 'react'
import Home from './Home'
import ArticleDeRechercheResult from './ArticleDeRechercheResult'
import LivresResult from './LivresResult'
import PfeResult from './PfeResult'
import MemoiresResults from './MemoiresResults'
import AllCategoryResult from './AllCategoryResult'

export class Results extends Component {
    constructor(props){
        super(props)
    }
    render() {
        if(this.props.category == ""){
            return (
                <div>
                    <Home />
                </div>
            )
        }else if(this.props.category == "memoire"){
            return (
                <div>
                    <MemoiresResults category="memoire"/>
                </div>
            )
        }else if(this.props.category == "pfe"){
            return (
                <div>
                    <PfeResult category="pfe"/>
                </div>
            )
        }else if(this.props.category == "livre"){
            return (
                <div>
                    <LivresResult category ="livre"/>
                </div>
            )
        }else if(this.props.category == 'article_de_recherche'){
            return (
                <div>
                    <ArticleDeRechercheResult category = "article_de_recherche"/>
                </div>
            )
        }else if(this.props.category == "allCategory"){
            return (
                <div>
                    <AllCategoryResult category="allCategory" />
                </div>
            )
        }
    }
}

export default Results
