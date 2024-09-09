
import React from "react";
import Listitem from "../list/Listitem";
import Tools from "../components/Tools";
import SimpleList from "../list/SimpleList";

   
class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            active: 'all',
         msg:''
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


// =================== component did mount life cycle ===================================//


componentDidMount(){
    console.log("ijkji")
    fetch('/data.json')
    .then(res =>res.json())
    .then((data)=>{

        this.setState({
            data:data
        })
    })
}

componentDidCatch(prop,pstate)
{
    console.log("i")
    if(pstate.msg !== this.state.msg){
    this.setState({
        msg:'msg'
    })
}
}


    labelclick = (arg) => {
        // const value =
        //   console.log("dd")
        console.log(arg)
        this.setState({
            active: arg
        })
    }
    render() {
        const {
            data,
            active
        } = this.state

        const newlist = data.filter((item) => {

            if (active == 'all') {
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
            <Tools  labelvalue={active} onAction={this.listchange}>
                <SimpleList onlabelclick={this.labelclick} data={newlist} onAction={this.listdelete} />

            </Tools>
        )
    }
}
export default Home;


