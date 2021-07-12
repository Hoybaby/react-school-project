import React from 'react'
import './Footer.css'

class Footer extends React.Component {
    render() {
        return (
            <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/* column 1 */}
                    <div className="col">
                        <h4>School Information</h4>
                        <ul className='list-unstyled'>
                        {this.props.schoolInfo ? <li>Madison, {this.props.schoolInfo.school.state} </li> : <li> No School Url</li>}
                        {this.props.schoolInfo ? <li>{this.props.schoolInfo.school.school_url} </li> : <li> No School Url</li>}
                        {this.props.schoolInfo ? <li>{this.props.schoolInfo.school.zip} </li> : <li> No School Url</li>}
                            <li>(608) 263-2400</li>
                        </ul>    
                    </div>
                    {/* column 2 */}
                    <div className='col'>
                        <h4>Social Media</h4>
                        <ul className='list-unstyled'>
                            <li><a href="https://www.facebook.com/UWMadison/">UWMadison Facebook</a></li>
                            <li><a href="https://www.instagram.com/uwmadison/?hl=en">UWMadison Instagram</a></li>
                            <li><a href="https://twitter.com/UWMadisonMMI">UWMadison Twitter</a></li>

                        </ul>
                    </div>
                    
                </div>
                <hr/>
                <div className="row">
                    <p className='col-sm'>
                        &copy;{new Date().getFullYear()} Michael Bartek Inc | All rights reserved | Terms of Service | Privacy
                    </p>
                </div>
            </div>

        </div>
    )
        
    }
}
// const Footer = ({schoolInfo}) => {
//     console.log(schoolInfo)
//     return(
//         <div className="main-footer">
//             <div className="container">
//                 <div className="row">
//                     {/* column 1 */}
//                     <div className="col">
//                         <h4>School Information</h4>
//                         <ul className='list-unstyled'>
//                             <li>www.wisc.edu</li>
//                             {/* {this.props.schoolInfo ? <li>{this.props.schoolInfo.school.zip} </li> : <li> No School Url</li>} */}
//                             <li>(608) 263-2400</li>
//                         </ul>    
//                     </div>
//                     {/* column 2 */}
//                     <div className='col'>
//                         <h4>Social Media</h4>
//                         <ul className='list-unstyled'>
//                             <li><a href="https://www.facebook.com/UWMadison/">UWMadison Facebook</a></li>
//                             <li><a href="https://www.instagram.com/uwmadison/?hl=en">UWMadison Instagram</a></li>
//                             <li><a href="https://twitter.com/UWMadisonMMI">UWMadison Twitter</a></li>

//                         </ul>
//                     </div>
                    
//                 </div>
//                 <hr/>
//                 <div className="row">
//                     <p className='col-sm'>
//                         &copy;{new Date().getFullYear()} Michael Bartek Inc | All rights reserved | Terms of Service | Privacy
//                     </p>
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default Footer;
export default Footer;