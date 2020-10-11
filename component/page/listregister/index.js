import React, { Component } from 'react';
import "./listregister.css"

class ListRegister extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const { getRegister } = this.props
        return (
            <div className="listregister">
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
                                    </tr>
                        </tbody>
                        </table>
            </div>
        );
    }
}
 
export default ListRegister;