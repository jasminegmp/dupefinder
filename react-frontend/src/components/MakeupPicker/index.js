import React from 'react';
import './styles.scss';

class MakeupPicker extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            makeup: null
        };
    }

    componentDidMount(){
        this.props.updateMakeup(this.state.makeup);
    }

    handleRadio = (event) => {
        //event.preventDefault();
        this.setState({makeup: event.target.value}, () => {this.props.updateMakeup(this.state.makeup)});
      }
      

    render() {
        return (
            <form class = "radio-toolbar">
                <label className={this.state.makeup === "lipstick" ? 'selectedborder' : null}>
                    <input type = "radio" checked={this.state.makeup === "lipstick"} value = "lipstick" onChange = {this.handleRadio}/>
                    <img className={this.state.makeup === "lipstick" ? 'selectedborder' : null} src = "https://res.cloudinary.com/dbo29vgn4/image/upload/v1578093985/icons/icons8-lipstick-50_yvqpap.png" alt = "lipstick"/>
                    <h4>lipstick</h4>
                </label>
                <label className={this.state.makeup === "blush" ? 'selectedborder' : null}>
                    <input type = "radio" checked={this.state.makeup === "blush"} value = "blush" onChange = {this.handleRadio}/>
                    <img src = "https://res.cloudinary.com/dbo29vgn4/image/upload/v1578093985/icons/icons8-cosmetic-brush-50_f8me5b.png" alt = "blush"/>
                    <h4>blush</h4>
                </label>
                <label className={this.state.makeup === "foundation" ? 'selectedborder' : null}>
                    <input type = "radio" checked={this.state.makeup === "foundation"} value = "foundation" onChange = {this.handleRadio}/>
                    <img src = "https://res.cloudinary.com/dbo29vgn4/image/upload/v1578093985/icons/icons8-foundation-makeup-50_f5beng.png" alt = "foundation"/>
                    <h4>foundation</h4>
                </label>
                <label className={this.state.makeup === "eyeshadow" ? 'selectedborder' : null}>
                    <input type = "radio" checked={this.state.makeup === "eyeshadow"} value = "eyeshadow" onChange = {this.handleRadio}/>
                    <img src = "https://res.cloudinary.com/dbo29vgn4/image/upload/v1578093985/icons/icons8-makeup-50_jtehfq.png" alt = "eyeshadow"/>
                    <h4>eye shadow</h4>
                </label>
            </form>
        );
    }
}


export default MakeupPicker;
