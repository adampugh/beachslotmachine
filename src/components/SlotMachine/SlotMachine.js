import React, { Component } from 'react';
import Modal from 'react-responsive-modal';

import Logo from '../../assets/logo.png';

class SlotMachine extends Component {
    state = {
        first: '',
        second: '',
        third: '',
        counter: 0,
        open: false,
        disabled: false
    }

    componentDidMount() {
        const { wheel } = this.props;
        this.setState({
            first: wheel[0],
            second: wheel[0],
            third: wheel[0]
        });
    }

    onOpenModal = () => {
        this.setState({ open: true });
    };
     
    onCloseModal = () => {
        this.setState({ open: false });
    };


    random = () => {
        const { wheel } = this.props
        return Math.floor(Math.random() * wheel.length);
    }


    handleSpin = () => {
        let { counter } = this.state;
        const { wheel } = this.props;

        const spin = setInterval(() => {

            // generate random numbers
            let left = this.random();
            let center = this.random();
            let right = this.random();

            // set state for current position
            this.setState({
                counter: counter++,
                first: wheel[left],
                second: wheel[center],
                third: wheel[right],
                disabled: true
            });

            // check result when finished spinning
            if (counter > 10) {
                this.setState({ 
                    counter: 0,
                    disabled: false
                });
                this.checkResult();
                clearInterval(spin);
            }
            
        }, 100);
    }
    
    checkResult = () => {
        const { first, second, third } = this.state; 

        if ((first === second) && (second === third)) {
            this.onOpenModal();
        }
    }

    render() {
        const { first, second, third, open, disabled } = this.state;

        return (
            <div className="slotMachine">
                <Modal open={open} onClose={this.onCloseModal} center>
                    <h1 className="slotMachine__modal__title">You Won!!!</h1>
                </Modal>
                <img className="slotMachine__logo" src={Logo} alt="logo" />
                <div className="slotMachine__grid">
                    <div className="slotMachine__slot">
                        <img src={first} alt="first slot" />
                    </div>
                    <div className="slotMachine__slot">
                        <img src={second} alt="second slot" />
                    </div>
                    <div className="slotMachine__slot">
                        <img src={third} alt="third slot" />
                    </div>
                </div>
                <div className="slotMachine__buttons">
                    <button className="btn" onClick={this.handleSpin} disabled={disabled}>Play</button>
                    <h3 className="slotMachine__buttons__text">Click the play button to start!</h3>
                </div>
            </div>
        )
    }
}

export default SlotMachine;