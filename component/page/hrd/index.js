import React, { Component } from 'react';

class HRD extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nama: "",
            lahir: "",
            asal: "",
            email: "",
            divisi: "",
            posisi: ""
        }
    }

    setValue = (el) => {
        this.setState({
            [el.name]: el.value
        })
    }
    setName = (el) => {
        this.setState({
            [el.name]: el.name
        })
    }
    saveAssign = () => {
        const { divisi, posisi} = this.state
        const { getRegister } = this.props
        const { nama } = this.state
        for (let i=0; i<getRegister.length; i++) {
            if ( nama === getRegister[i].nama) {
                let objEmp = {
                    nama: getRegister[i].nama,
                    lahir: getRegister[i].lahir,
                    asal: getRegister[i].asal,
                    email: getRegister[i].email,
                    divisi: divisi,
                    posisi: posisi
                }
                this.props.sendAssign(objEmp)
            }
        }
    }
    
    render() { 
        const { getRegister } = this.props
        const { getDivisi } = this.props
        const { getPosisi } = this.props
        return (
            <div className="hrd">
                <div className="tabel-calonemp">
                    <table>
                        <thead>
                            <tr>
                                <th>Nama</th>
                                <th>Tanggal Lahir</th>
                                <th>Asal</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                getRegister.map((val, idx) => {
                                    return (
                                    <tr key={idx}>
                                        <td>{val.nama}</td>
                                        <td>{val.lahir}</td>
                                        <td>{val.asal}</td>
                                        <td>{val.email}</td>
                                        <td>
                                            <select>
                                                {
                                                    getDivisi.map((val) => {
                                                        return (
                                                            <option name="divisi" 
                                                            onChange={(el) => this.setValue(el.target)}
                                                            >{val.divisi}</option>
                                                        )
                                                    })
                                                }
                                            </select>
                                        </td>
                                        <td>
                                            <select>
                                                {
                                                    getPosisi.map((val) => {
                                                        return (
                                                            <option name="posisi"
                                                            onChange={(el) => this.setValue(el.target)}
                                                            >{val.posisi}</option>
                                                        )
                                                    })
                                                }
                                            </select>
                                        </td>
                                        <td>
                                            <button name={val.nama}
                                            onClick={this.saveAssign}
                                            onChange={(el) => this.setName(el.target)}>Assign</button>
                                        </td>
                                    </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        );
    }
}
 
export default HRD;