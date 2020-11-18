GET /bibliotheque/livre_document/_search
{
    "query":{
        "query_string": {
            "query": "la"
        }
    }   
}

//document_document
//, emprunt_document
//, doc_etudiant_document
//, categorie_document,
// publication_document,
// auteur_document, 
//livre_document