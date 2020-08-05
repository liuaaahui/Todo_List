import React from 'react';
import './todo.css'
import { getTodo,delTodo,updateTodo} from '../../api'



class Todo extends React.Component {
    delete = () => {
        delTodo(this.props.todo.id).then(() => {
                getTodo().then((res) => {
                    this.props.updateTodoList(res.data);
                })
        })
    }

    changeDone = () => {
        let todo = {id:this.props.todo.id,content:this.props.todo.content,status:this.props.todo.status}
        updateTodo(todo).then(()=>{
            getTodo().then((res) => {
                this.props.updateTodoList(res.data);
            })
        })
    }
    render(){
        return (
            <div className="outerTodo" onClick={this.changeDone}>
                <div className="everyTodo"><span className={this.props.todo.status ? "isdone" : "notdone"}>{this.props.todo.content}</span><span className="rightTodo" onClick={this.delete}><img src="/delete.png" alt="x" /></span></div>
            </div>
        )
    }
}
export default Todo;