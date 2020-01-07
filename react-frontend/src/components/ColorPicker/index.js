import React from 'react';
import './styles.scss';
import IroColorPicker from "../IroColorPicker";

class ColorPicker extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            color: "#ffffff"
        };
    }

    onColorChange = color => {
        this.setState({
            color: color.hexString
        }, () => {this.props.updateColor(color.hexString)});

    };

    render() {
        return (
            <div class = "colorpicker">
                <div class = "colorpicker-box">
                    <IroColorPicker
                        class = "colorpicker-box iro"
                        color={this.state.color}
                        onColorChange={this.onColorChange}
                    />
                </div>
                <div class = "colorpicker-box selected">
                    <div class="color-circle" style={{ background: `${this.state.color}`}}></div>
                </div>
            </div>
        );
    }
}


export default ColorPicker;
