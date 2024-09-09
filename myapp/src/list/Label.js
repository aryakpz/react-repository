
import React from "react"
import './Label.css';
// function Label() {
//     return(<span> Label  0 </span>)
// }
class Label extends React.Component {
    render() {
        const pr = this.props;

        const style = pr.isactive ? { background: 'green' } : { background: 'darkOrange' }

        return <span onClick={() => {
            pr.onAction(pr.isactive ? 'active':'nonactive')

        }} className="sp" style={style}> {pr.isactive ? 'Active' : 'Non active'}</span>
    }
}
export default Label;







































// Typing     : [31wpm][94%]
// Focus      : [9hr 30min]
// CT         : [8hr 54min][663hr 30min]
// ACT        : [8hr 7min][624hr 21min]
// HTML       : [125][13281]
// CSS        : [140][22489]
// JS         : [139][10618]
// JSON       : [0][4424]
// Total      : [424][48928]
// days       : #30


// 0543076139
// musthakhir@gammaholdings.ae