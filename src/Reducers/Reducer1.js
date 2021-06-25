import { Get } from "../Actions/Actions";

const initialState={
    name:'',
    tableData:[]
}

export default function(state = initialState, action) {
	console.log(action)
	switch (Get) {
		case Get:
			return {
				...state,
				tableData: action.payload,				
			};
            // case 'getname':
			// return {
			// 	...state,
			// 	name: action.payload,				
			// };
			
			
		default:
			return state;
	}
}
