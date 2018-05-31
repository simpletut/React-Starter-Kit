import React, {Component} from 'react';

class RenderHTML extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div
                className={`${this.props.wrapperClass}`} 
                dangerouslySetInnerHTML={{__html: this.props.html}}>
            </div>
        )
    };
}

export default RenderHTML;