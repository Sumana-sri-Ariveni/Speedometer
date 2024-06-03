
import {Component} from 'react'
import './index.css'

class Speedometer extends Component{
    state = {count :0}

     

    onIncrement = () => {
        this.setState((prevState) => {
            if (prevState.count < 200) {
              
                console.log(`prevState value: ${prevState.count}`);
                return { count: prevState.count + 10 };
            }
        });
    };

    onStop = () => {
        this.setState((prevState) => {
            console.log(`prevState value: ${prevState.count}`);
            return { count: prevState.count-10};
        });
    };



    render(){

        const {count}=this.state
    return(
        <div className="container">
        <h1 className="main-head">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="image"
          alt="speedometer"
        />
        <h1 className="heading">Speed is {count}kmph</h1>
        <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button className="btn1" onClick={this.onIncrement}>
            Accelerate
          </button>
          <button className="btn2" onClick={this.onStop}>
            Apply Brake
          </button>
        </div>
      </div>
    )

    }

}

export default Speedometer;