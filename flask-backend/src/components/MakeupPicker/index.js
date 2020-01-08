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
                    <img src = "https://res.cloudinary.com/dbo29vgn4/image/upload/v1578338570/icons8-lipstick-50_yteyjw.png" alt = "lipstick"/>
                    <h4>lipstick</h4>
                </label>
                <label className={this.state.makeup === "lip_liner" ? 'selectedborder' : null}>
                    <input type = "radio" checked={this.state.makeup === "lip_liner"} value = "lip_liner" onChange = {this.handleRadio}/>
                    <img src = "https://res.cloudinary.com/dbo29vgn4/image/upload/v1578338570/icons8-lips-50_lz56mw.png" alt = "lip_liner"/>
                    <h4>lip liner</h4>
                </label>
                <label className={this.state.makeup === "blush" ? 'selectedborder' : null}>
                    <input type = "radio" checked={this.state.makeup === "blush"} value = "blush" onChange = {this.handleRadio}/>
                    <img src = "https://res.cloudinary.com/dbo29vgn4/image/upload/v1578338569/icons8-cosmetic-brush-50_p3gxiw.png" alt = "blush"/>
                    <h4>blush</h4>
                </label>
                <label className={this.state.makeup === "foundation" ? 'selectedborder' : null}>
                    <input type = "radio" checked={this.state.makeup === "foundation"} value = "foundation" onChange = {this.handleRadio}/>
                    <img src = "https://res.cloudinary.com/dbo29vgn4/image/upload/v1578338569/icons8-foundation-makeup-50_powebs.png" alt = "foundation"/>
                    <h4>foundation</h4>
                </label>
                <label className={this.state.makeup === "bronzer" ? 'selectedborder' : null}>
                    <input type = "radio" checked={this.state.makeup === "bronzer"} value = "bronzer" onChange = {this.handleRadio}/>
                    <img src = "https://res.cloudinary.com/dbo29vgn4/image/upload/v1578338570/icons8-face-powder-50_efqmnw.png" alt = "bronzer"/>
                    <h4>bronzer</h4>
                </label>
                <label className={this.state.makeup === "eyebrow" ? 'selectedborder' : null}>
                    <input type = "radio" checked={this.state.makeup === "eyebrow"} value = "eyebrow" onChange = {this.handleRadio}/>
                    <img src = "https://res.cloudinary.com/dbo29vgn4/image/upload/v1578338570/icons8-eyebrow-50_wdgvqq.png" alt = "eyebrow"/>
                    <h4>eyebrow</h4>
                </label>
                <label className={this.state.makeup === "eyeliner" ? 'selectedborder' : null}>
                    <input type = "radio" checked={this.state.makeup === "eyeliner"} value = "eyeliner" onChange = {this.handleRadio}/>
                    <img src = "https://res.cloudinary.com/dbo29vgn4/image/upload/v1578339000/icons8-pencil-50_vovqlo.png" alt = "eyeliner"/>
                    <h4>eyeliner</h4>
                </label>
                <label className={this.state.makeup === "mascara" ? 'selectedborder' : null}>
                    <input type = "radio" checked={this.state.makeup === "mascara"} value = "mascara" onChange = {this.handleRadio}/>
                    <img src = "https://res.cloudinary.com/dbo29vgn4/image/upload/v1578338569/icons8-eyelash-50_pwjqtj.png" alt = "mascara"/>
                    <h4>mascara</h4>
                </label>
                <label className={this.state.makeup === "eyeshadow" ? 'selectedborder' : null}>
                    <input type = "radio" checked={this.state.makeup === "eyeshadow"} value = "eyeshadow" onChange = {this.handleRadio}/>
                    <img src = "https://res.cloudinary.com/dbo29vgn4/image/upload/v1578338570/icons8-makeup-50_el7uem.png" alt = "eyeshadow"/>
                    <h4>eye shadow</h4>
                </label>
                <label className={this.state.makeup === "nail_polish" ? 'selectedborder' : null}>
                    <input type = "radio" checked={this.state.makeup === "nail_polish"} value = "nail_polish" onChange = {this.handleRadio}/>
                    <img src = "https://res.cloudinary.com/dbo29vgn4/image/upload/v1578338570/icons8-nail-polish-50_nfmee2.png" alt = "nail_polish"/>
                    <h4>nail polish</h4>
                </label>
            </form>
        );
    }
}


export default MakeupPicker;
