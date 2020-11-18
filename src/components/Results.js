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
        if(this.props.type_document == ""){
            return (
                <div>
                    <Home />
                </div>
            )
        }else if(this.props.type_document == "memoire"){
            return (
                <div>
                    <MemoiresResults type_document="memoire"/>
                </div>
            )
        }else if(this.props.type_document == "pfe"){
            return (
                <div>
                    <PfeResult type_document="pfe"/>
                </div>
            )
        }else if(this.props.type_document == "livre"){
            return (
                <div>
                    <LivresResult type_document ="livre"/>
                </div>
            )
        }else if(this.props.type_document == 'article'){
            return (
                <div>
                    <ArticleDeRechercheResult type_document = "article"/>
                </div>
            )
        }else if(this.props.type_document == "allDocument"){
            return (
                <div>
                    <AllCategoryResult type_document="allDocument" />
                </div>
            )
        }
    }
}

export default Results
