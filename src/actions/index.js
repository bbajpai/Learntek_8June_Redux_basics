//import data from 'dummy';

export function moviesList(){

    //const fetch = fetch('url', {method:'GET'}.then(response => response.json);
    return {
        type:'MOVIES_LIST',
         payload:[
             {id:'1', name:'Doctor Strange'},
             {id:'2', name:'Avangers'},
             {id:'3', name:'The Matrix'},
             {id:'4', name:'Mars'}
         ]
    }
}