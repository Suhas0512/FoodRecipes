import React from 'react'
import { MDBContainer, MDBRow, MDBCol,  MDBCardHeader, MDBMedia } from 'mdbreact'
import { connect } from 'react-redux'
import { startGetAllRecipes } from '../../../actions/recipesAction'
import ReactHtmlParser from 'react-html-parser'

function RecipesList(props){
    if(props.recipes.length == 0){
        props.dispatch(startGetAllRecipes())
    }
    return(
        <MDBContainer>
            <MDBRow>
                <MDBCol md="12">
                <h2 className="h1-responsive font-weight-bold my-5 text-center">Total Recipes - {props.recipes && props.recipes.length} </h2>

                {
                    props.recipes && props.recipes.map((recipe,i)=>{
                        return (
                            <div key={i+'recipes'}>
                                <MDBCardHeader className="border-0 font-weight-bold d-flex justify-content-between">
                                    <p className="mr-4 mb-0" style={{fontSize:"25px"}} >Title - {recipe.title} </p>
                                    </MDBCardHeader>
                                    <MDBMedia className="p-4 bg-white">
                                    <MDBMedia body>
                                        <h5 className="font-weight-bold mt-0">
                                        Author - {recipe.author}
                                        </h5>
                                        {ReactHtmlParser(recipe.ingredients)}
                                        <br />
                                    </MDBMedia>
                                    </MDBMedia>
                                    <hr />
                            </div>
                        )
                    })
                }

                
 
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

const mapStateToProps = (state) => {
    return {
        user : state.user,
        recipes : state.recipes
    }
}

export default connect(mapStateToProps)(RecipesList)