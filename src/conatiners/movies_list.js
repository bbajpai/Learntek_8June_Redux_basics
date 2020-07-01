import React,{Component} from 'react';
import { connect } from 'react-redux';

import * as action from '../actions'

class MoviesList extends Component{

    componentWillMount(){
        this.props.moviesList();
    }

    renderList = (movies) =>{
            if(movies){
                return movies.map((movie)=>{
                    return(
                       <h3 key={movie.id}>{movie.name}</h3>
                    )
                })
            }
          
    }
    render(){
        return(
            <div>
                {this.renderList(this.props.movies)}
            </div>
        )
    
    }
}


function mapStateToProps(state){
    console.log('inside map state to props  ' , state)
    return{
        movies:state.movies
    }
}

export default connect(mapStateToProps,action) (MoviesList);