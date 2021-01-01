import React,{ Component } from 'react';
import Header from "./Header"
import './ShowSubscribers.css';
import './common/common.css';
import {Link} from 'react-router-dom';

class ShowSubscribers extends Component {
   onDeletedClick = (subscriberId) => {
     this.props.deleteSubscriberHandler(subscriberId);
   }
  render() {
    console.log("Render called")
    
  return (
   <div>
     <Header heading="Phone Directory"/>
    
   <Link to = "/add"><button className="add"> ADD </button></Link>
    <div>
     <span className="name">Name</span>
     <span className="phn">Phone</span>
  </div>
   
  {
    this.props.subscribersList.map(sub => {
      return <div key={sub.id}className="subscriberDetails">
        <span className="nameofsub">{sub.name}</span>

        <span className="phnofsub">{sub.phone}</span>
        <span className="delete-btn-container">
         <button className="delete-btn" onClick={this.onDeletedClick.bind(this,sub.id)}>Delete</button>
         </span>
      </div>
  
    })
  }

  </div>
 


    
  );
 }
}


export default ShowSubscribers;
