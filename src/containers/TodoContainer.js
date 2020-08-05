import Todo from "../components/Todo";
import {updateTodoList} from "../action";
import {connect} from "react-redux";

const mapDispatchToProps = dispatch => {
    return {
        updateTodoList: (item)=>{
            dispatch(updateTodoList(item))
        }
    }
}
const TodoContainer = connect(
    null,
    mapDispatchToProps
)(Todo)

export default TodoContainer;