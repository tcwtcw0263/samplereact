import axios from 'axios'; //es6


export const Get='getdata';
export const GetData = () => async dispatch => {

   await axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((response) =>

    dispatch({type:Get, payload:response.data})
        
    )
    .catch((err) => console.log('Error', err))

}




