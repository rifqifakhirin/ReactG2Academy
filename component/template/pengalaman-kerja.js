import React, { Component } from 'react';
import "./pengalaman-kerja.css"


class PengalamanKerja extends Component {    
    render() { 
        return (
            <div className="pengalaman-kerja">
            <h3>Work Experience:</h3>
            <table>
              <thead>
                  <tr>                            
                      <th></th>
                      <th></th>
                  </tr>
              </thead>
              <tbody >
                  <tr>                            
                      <td>March 2020 – April 2020</td>
                      <td>Product Brand Rater - Remote</td>
                  </tr>
                  <tr>                            
                      <td></td>
                      <td>Independent contractor at Appen Butler Hill - Freelance</td>
                  </tr>
                  <tr>                            
                    <td>September 2018 – February 2020</td>
                    <td>Web Search Evaluator - Remote</td>
                  </tr>
                  <tr>                            
                    <td></td>
                    <td>Independent contractor at Appen Butler Hill - Freelance</td>
                  </tr>
                  <tr>                            
                    <td>November 2017 - March 2018</td>
                    <td>Media Social Evaluator - Remote</td>
                  </tr>
                  <tr>                            
                    <td></td>
                    <td>Independent contractor at Appen Butler Hill - Freelance</td>
                  </tr>
              </tbody>
          </table>
          </div> 
        );
    }
}
 
export default PengalamanKerja;