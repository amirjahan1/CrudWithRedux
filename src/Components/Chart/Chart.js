import React, {useEffect , useState} from 'react';
import { BarChart } from "reaviz";
import {connect} from 'react-redux';

const Chart = (props) => {

   let htmlLen = []
   let cssLen = []
   let jsLen = []

    const [htmltol, setHtmltol] = useState(0);
    const [csstol, setCsstol] = useState(0);
    const [jstol, setJstol] = useState(0);



    useEffect(async ()=>{
      await  props.amar.map(item=> {
            htmlLen.push(item.html)
            cssLen.push(item.css)
            jsLen.push(item.js)
        })

        htmlLen = htmlLen.filter(item=> item !== null && item !== "")
        cssLen = cssLen.filter(item=> item !== null && item !== "")
        jsLen = jsLen.filter(item=> item !== null && item !== "")



         setHtmltol(htmlLen.length)
         setCsstol(cssLen.length)
         setJstol(jsLen.length)



    },[])

    let  data = [
        { key: 'html', data: htmltol },
        { key: 'css', data: csstol },
        { key: 'js', data: jstol  },

    ];



     return(
        <div className="flex justify-center items-center h-full mt-48">
            <BarChart width={350} height={250} data={data} />
        </div>

    )
}

const mapStateToProps = (state) => {
    return {
        amar: state.FormDetails.formDetail
    }
}

export default connect(mapStateToProps)(Chart)