import React, { Component } from 'react';

class Counter extends Component {
 state = {
     count:0,
     tags: ["item1", "item2", "item3"],
     product: ''
   
 };

 constructor() {
     super();
     this.handleIncrement(this);
     console.log('Constructor', this);
 }

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1});
        console.log('handleIncrement');
    };

    renderTags() {
        if(this.state.tags.length === 0) return <p>There are not tags</p>;

    return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    };
 
    render() {    
    return(
    <div>
        {/* <span className={this.getBadgeClasses()}>{this.formatCount()}</span> */}
        <button onClick={() => this.handleIncrement()}
        className="btn btn-secondary btn-sm">
        Increment
        </button>
        <ul>
            <li>{this.state.count}</li>

        </ul>
       {this.state.tags.length === 0 && "Please create new tag!"}
       {this.renderTags()}
          
    </div>); 
 
}


}
 
export default Counter; 