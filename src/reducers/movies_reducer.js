// const data = {
//     type:'MOVIES_LIST',
//     payload:{
//         {id:'1', name:'Doctor Strange'},
//         {id:'2', name:'Avangers'},
//         {id:'3', name:'The Matrix'}
//     }
// }


export default function(state=null,action){
        switch(action.type){
            case 'MOVIES_LIST':
                return action.payload;

            default:
                return state;
        }
}