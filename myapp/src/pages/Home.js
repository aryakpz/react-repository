
import React from "react";
import Tools from "../components/Tools";
import SimpleList from "../list/SimpleList";

const myc = React.createContext();   
class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            active: 'all',
            msg: '',
            showlabel: true
        }
    }

    listchange = (event) => {
        const value = event.target.value
        this.setState({
            active: value
        })

    }

    listdelete = (item) => {
        console.log("jjj", item.id)

        const newlist = this.state.data.filter((element) => element.id !== item.id)
        console.log(newlist)

        this.setState({
            data: newlist
        })
    }

    pagerefresh = () => {
        console.log("rrr")

        fetch('./data2.json')
            .then((res) => res.json())
            .then((data) =>
                // console.log(data)

                this.setState({
                    data: data
                })
            )
        }   

    back = () => {
        this.componentDidMount()

    }
    
// ===================  component did mount life cycle  =================================== //

    componentDidMount() {
        console.log("ijkji")
        fetch('/data.json')
            .then(res => res.json())
            .then((data) => {

                this.setState({
                    data: data
                })
            })
    }

    componentDidCatch(prop, pstate) {
        console.log("i")
        if (pstate.msg !== this.state.msg) {
            this.setState({
                msg: 'msg'
            })
        }
    }

    labelclick = (arg) => {
        console.log(arg)
        this.setState({
            active: arg
        })
    }

    onlabekcheck = () => {
        console.log("check")
    }

    render() {
        const {
            data,
            active
        } = this.state

        const newlist = data.filter((item) => {

            if (active === 'all') {
                return true
            }
            if (active === 'active') {
                return item.isactive === true
            }
            if (active === 'nonactive') {
                return item.isactive === false
            }
            return false
        });

        return (

            <div>
                <div className="show">
                    <input checked={this.state.show} onChange={this.state.ronlabelcheck} type="checkbox"></input>Show Label
                </div>

                <myc.Provider value={this.state.showlabel}>
                    <Tools labelvalue={active} onAction={this.listchange} refresh={this.pagerefresh} back={this.back}>
                        <SimpleList onlabelclick={this.labelclick} Show Label data={newlist} onAction={this.listdelete} />
                    </Tools>
                </myc.Provider>

            </div>
        )
    }   
}
 
export default Home;  