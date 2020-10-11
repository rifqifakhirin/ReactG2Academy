import React, { Component } from 'react';

class InputDiv extends Component {
    constructor(props) {
        super(props);
        this.state = {
            divisi: "",
            posisi: ""
        }
    }

    setValue = (el) => {
        console.log(el.name)
        console.log(el.value)
        this.setState({
            [el.name]: el.value
        })
    }
    saveDivisi = () => {
        const { divisi } = this.state
        const { getDivisi } = this.props
        if (getDivisi.divisi === divisi) {
            alert ("Divisi sudah ada sebelumnya!")
            return
        } else {
            this.props.sendDivisi({divisi})
        }        
    }
    savePosisi = () => {
        const { posisi } = this.state
        const { getPosisi } = this.props
        if (getPosisi.posisi === posisi) {
            alert ("Posisi sudah ada sebelumnya!")
            return
        } else {
            this.props.sendPosisi({posisi})
        }        
    }

    render() { 
        return (
            <div className="inputdiv">
                <div>
                    <div><label>Nama Divisi: </label></div>
                    <div>
                        <input
                        type="text"
                        name="divisi"
                        placeholder="Divisi"
                        onChange={(el) => this.setValue(el.target)}></input></div>
                    <div><button onClick={this.saveDivisi}>Simpan</button></div>
                </div>
                <div>
                    <div><label>Nama Posisi: </label></div>
                    <div>
                        <input
                        type="text"
                        name="posisi"
                        placeholder="Posisi"
                        onChange={(el) => this.setValue(el.target)}></input></div>
                    <div><button onClick={this.savePosisi}>Simpan</button></div>
                </div>
            </div>
        );
    }
}
 
export default InputDiv;