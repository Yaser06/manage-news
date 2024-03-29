import addNews from "./addNews";
import deleteNotice from "./deleteNotice";
import updateNews from "./updateNews";

const handleAdd = addNews();
const handleUpdate = updateNews();
const handleDelete = deleteNotice();

const reducer = (state, action) => {
    switch (action.type) {
        case 'finished':
            return action.state;
        case 'add':
            console.log('mansur     ',state);
            handleAdd(action.state)
            return [action.state, ...state];// spread operator javascript
        case 'update':
            handleUpdate(action.id, action.state)
            return state.map(item => {
                if (item?.id === action?.id) {
                    return action?.state
                } else {
                    return item
                }
            })
        case 'delete':
            handleDelete(action.id, action.state)
            return state.map(item => {
                if (item?.id === action?.id) {
                    return { ...action?.state, status: false }
                } else {
                    return item
                }
            });
        default:
            return state;
    }
}
export default reducer

