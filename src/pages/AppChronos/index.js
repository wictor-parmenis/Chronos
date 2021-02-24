import React, {Component} from 'react'
import {Link} from 'react-router-dom'


class AppChronos extends Component{
    constructor(props){
        super(props);
        this.state = {
            time: 0,
            btnStart: 'Start'
        }

        this.timer = null;
        // Binded functions;
        this.startTime = this.startTime.bind(this);
        this.resetTime = this.resetTime.bind(this);
    }

    // Build methods here;
    startTime(){
        if(this.timer != null){
            clearInterval(this.timer);
            this.timer = null;
            let state = this.state;
            state.btnStart = 'Start';
            this.setState(state);
        }else{
            this.timer = setInterval(() =>{
                let state = this.state;
                state.time += 0.01;
                state.btnStart = 'Pause';
                this.setState(state);
                this.setState(state);
            }, 10)
        }
    };

    resetTime(){
        clearInterval(this.timer);
        this.timer = null;
        let state = this.state;
        state.time = 0;
        this.setState(state);
    }

    render(){
        return(
            <div>
                <section className='app'>
                    <div className='card'>
                        <h3 className='chronosTimer'>{this.state.time.toFixed(2)}</h3>
                        <div className='buttonsTimer'>
                            <div className='startButton btn' onClick={this.startTime}>
                                <p>{this.state.btnStart}</p>
                            </div>
                            <div className='resetButton btn' onClick={this.resetTime}>
                                <p>Reset</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default AppChronos;