import React, {Component} from 'react';  // это нужно всегда

class Arcticle extends Component {
  
 state = { isOpen: true }

    render(){
        const {arcticle} = this.props;
        console.log(this.props);
        const body =  this.state.isOpen && <section> {arcticle.text} </section>;
        return ( <div>
            <h2> {arcticle.title}
               <button onClick={this.handleClick}>{this.state.isOpen ? 'Закрыть' : 'Открыть'}</button>
            
             </h2> 
            {body} 
            <h3>creation date: {(new Date(arcticle.date)).toDateString() } </h3> 
            </div>
        )
    }
    handleClick = () =>{
        console.log("cl") 
        this.setState({ 
            isOpen: !this.state.isOpen
        }) 
    }
}

export default Arcticle;