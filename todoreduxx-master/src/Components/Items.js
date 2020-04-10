import React,{Component} from 'react'
import { connect } from 'react-redux'
import {addtodo , remove, complet, edit,change} from "../Actions/actions"


 class Items extends Component    {
     
 
    state={
        task:"",
        finished : false
    };
    
    
    hundelChange=(e)=>{
        this.setState({task:e.target.value.trim()})
    }
   
    hundelAdd=(e)=>{ 
        
        e.preventDefault()
        this.props.addtodo({
            inputuser:this.state.task,
            id:Math.random(),
            completed:false,
            editt:false
        })
        this.setState({
            task:"",
            finished:!addtodo.completed
        })
    }
    changeElement = (e,i) => {
        this.props.change(e.target.value,i);
      };

    

    render() {
       
        return (
            <>
            <div className="card card-body m-3">
                <from>
                    <div className="input-group">
                        <div className="input-group-prepend">
                        <div className="input-group-prepend-text bg-primary text-white">
                            <i className="fas fa-book p-2"></i>
                        </div>
                        </div>
                        <input type="text" className="form-control text-capitalize" value={this.state.task} placeholder="put you task here !!!" onChange={this.hundelChange}></input>
                    </div>
                    <button type="submit" onClick={this.hundelAdd } className={this.state.finished ? "btn btn-block btn-success mt-2" : "btn btn-block btn-primary mt-2"}>{this.state.finished ? "Edit Task":"Add Task"}</button>
                </from>
            </div>


         



                
           
        )
    }
}

const mapStateToProps=state=>{
    return{todo:state}
}

const mapDispatchToProps=dispatch=>{
    return{addtodo:(text)=>dispatch(addtodo(text)),
    remove:(i)=>dispatch(remove(i)),
    complet : (i)=> dispatch(complet(i)),
    edit : (i)=> dispatch(edit(i)),
    change : (text,i)=> dispatch(change(text,i))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Items);