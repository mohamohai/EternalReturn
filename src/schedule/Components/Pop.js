import React, {Component} from 'react';
 
class SchedulePop extends Component {
       
  constructor(props){
    super(props);

    this.state = {
        isOpenPopup: false,
    }

    this.openPopup = this.openPopup.bind(this);
    this.closePopup = this.closePopup.bind(this);
}openPopup(){
    this.setState({
        isOpenPopup: true,
    })
}

closePopup(){
    this.setState({
        isOpenPopup: false,
    })
}



    render(){
        return(
            
                <div className="full_layer">
                    <div className="common_alert"> 
                        <div>PoP!</div>
                        <div>
                            <button type="button" onClick={this.props.onClose}>close</button>
                        </div>
                    </div>
                </div>
           
        );
    }
}
 
export default SchedulePop;