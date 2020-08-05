import React from "react";
import {postTodo,getTodo} from '../../api'
class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        }
    }

    onSubmit = () => {
        let req = {content:this.state.text,status:false}
        postTodo(req).then((res)=>{
            // this.props.addTodo({text:this.state.text,isDone:false});
            getTodo().then((res) => {
                this.props.updateTodoList(res.data);
            })
        })
    }

    componentDidMount(){
        getTodo().then((res) => {
            this.props.updateTodoList(res.data);
        })
    }

    onChange = (event) => {
        this.setState({
            text: event.target.value
        })
    }
    render() {
        return (
            <form>
                <input type="text" onChange={this.onChange}/>
                <input type="button" onClick={this.onSubmit} value="提交TODO"/>
            </form>
        )
    }
}


export default TodoForm;