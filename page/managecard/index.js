import React, { Component } from 'react';
import "./managecard.css"
// import { addDataMember } from "../../action"
// import { connect } from "react-redux"
// import { editDataMember } from "../../action"
import { FirebaseContext } from "../../config/firebase"

class ManagecardForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foto: "",
            nama: "",
            quotes: "",
            github: ""
        }
    }

    setValue = el => {
        console.log(el.name)
        console.log(el.value)
        this.setState({
            [el.name]: el.value
        })
    }

    setMember = el => {
        console.log("setMember")
        const { foto, nama, quotes, github } = this.state
        const mbr = { foto, nama, quotes, github }
        // this.props.getMember(mbr)
        this.props.firebase.memberDb().doc().set({
            mbr
        }).then(res => console.log(res))
        .catch(err => {
            console.error(err)
            alert(err.message)
        })
    }

    

    // showClass1 = () => {
    // let classPage = document.getElementById(containermanage1).classList;
    //   classPage.remove("hide-page");
    // }


    render() { 
        // const { dataMember } = this.props.dataMember
        return (
            <div className="managecard">
                <div className="container-manage">
                    <h3>Input Member</h3>
                <div className="inputdesign">
                    <div>
                        <label>Link Foto:</label>
                    </div>
                    <div>
                        <input
                        type="text"
                        name="foto"
                        placeholder="foto"                        
                        onChange={(el)=>this.setValue(el.target)}
                        ></input>
                    </div>
                    <div>
                        <label>Nama:</label>
                    </div>
                    <div>
                        <input
                        type="text"
                        name="nama"                     
                        placeholder="nama lengkap"
                        onChange={(el)=>this.setValue(el.target)}></input>
                    </div>
                    <div>
                        <label>Quotes:</label>
                    </div>
                    <div>
                        <textarea
                        type="text"
                        name="quotes"                     
                        placeholder="quotes"
                        onChange={(el)=>this.setValue(el.target)}>
                        </textarea>
                        </div>
                    <div>
                        <label>Link Github:</label>
                    </div>
                    <div>
                        <input
                        type="text"
                        name="github"                     
                        placeholder="link github"
                        onChange={(el)=>this.setValue(el.target)}></input>
                    </div>
                </div>
                
                <div>
                    <button onClick={this.setMember}>Tambah</button>
                </div>
                </div>
                {/* <div className="editMember">
                    <button onClick={this.showClass1}>Edit Member Bootcamp G2Academy</button>
                </div>
                <div id="containermanage1" className="hide-page">
                    <h3>Edit Member</h3>
                <div className="inputdesign">
                    <div>
                        <label>Nama:</label>
                    </div>
                    <div>
                    <select>
                        <option>--Nama Lengkap--</option>
                        {   dataMember.map((val) => {
                                return (
                                    <option onChange={this.setValue}>{val.nama}</option>
                                    )
                            })
                        }
                    </select>
                    </div>                    
                    <div>
                        <label>Link Foto:</label>
                    </div>
                    <div>
                        <input
                        type="text"
                        name="foto"
                        placeholder="foto"                        
                        onChange={(el)=>this.setValue(el.target)}
                        ></input>
                    </div>
                    <div>
                        <label>Quotes:</label>
                    </div>
                    <div>
                        <textarea
                        type="text"
                        name="quotes"                     
                        placeholder="quotes"
                        onChange={(el)=>this.setValue(el.target)}>
                        </textarea>
                        </div>
                    <div>
                        <label>Link Github:</label>
                    </div>
                    <div>
                        <input
                        type="text"
                        name="github"                     
                        placeholder="link github"
                        onChange={(el)=>this.setValue(el.target)}></input>
                    </div>
                </div>
                
                <div>
                    <button onClick={this.setEdMember}>Simpan perubahan</button>
                </div>
                {/* <div>
                    <button onClick={this.hideClass}>Selesai</button>
                </div> */}
                {/* </div>
                <div className="deleteMember">
                    <button>Delete Member Bootcamp G2Academy</button>
                </div>
                <div id="containermanage2" className="hide-page">
                    <h3>Edit Member</h3>
                <div className="inputdesign">
                    <div>
                        <label>Nama:</label>
                    </div>
                    <div>
                    <select>
                        <option>--Nama Lengkap--</option>
                        {   dataMember.map((val) => {
                                return (
                                    <option onChange={this.setValue}>{val.nama}</option>
                                    )
                            })
                        }
                    </select>
                    </div>                   
                </div>
                
                <div> */}
                    {/* <button onClick={this.setDelMember}>Simpan perubahan</button>
                </div> */}
                {/* <div>
                    <button onClick={this.hideClass}>Selesai</button>
                </div> */}
                {/* </div> */}
            </div>
        );
    }
}

class Managecard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <FirebaseContext.Consumer>
                { firebase => <ManagecardForm {...this.props} firebase={firebase} />}
            </FirebaseContext.Consumer>
        );
    }
}


// const mapDispatchToProps = (dispatch) => ({
//     getMember : (mbr) => dispatch(addDataMember(mbr))
// })

// const mapStateToProps = (state) => ({
//     dataMember: state.auth2.dataMember
// })
 
export default Managecard
// export default connect(mapStateToProps, mapDispatchToProps)(Managecard);