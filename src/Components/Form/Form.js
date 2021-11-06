import React ,{useState}from 'react' ;
import {connect} from 'react-redux' ;
import {addData} from '../../Redux/Action/Actions'
import './form.css' ;





const Form = (props) => {


        const [fname, setFname] = useState('')
        const [fnameHasErr, setFnameHasErr] = useState(true)
        const [errfname,setErrFname] = useState('')


        const [lname, setLname] = useState('')
        const [lnameHasErr, setLnameHasErr] = useState(true)
        const [errlname,setErrLname] = useState('')

        const [age, setAge] = useState(18)
        const [id, setId] = useState(Math.floor(Math.random() * 100))

        const [html, setHtml] = useState(null)
        const [css, setCss] = useState(null)
        const [js, setJs] = useState(null)



          function FnameValidate(e){
            if(e.target.value.length < 2){
                setErrFname('نام حداقل باید دو حرف باشد')
                setFnameHasErr(true)
            }

            else if (e.target.value.length > 50){
                setErrFname('نام حداکثر باید دو حرف باشد')
                setFnameHasErr(true)
            }

            else{
                setErrFname('درست است')
                setFname(e.target.value)
                setFnameHasErr(false)
            }

        }

           function LnameValidate(e){
        if(e.target.value.length < 2){
            setErrLname('نام حداقل باید دو حرف باشد')
            setLnameHasErr(true)
        }

        else if (e.target.value.length > 50){
            setErrLname('نام حداکثر باید دو حرف باشد')
            setLnameHasErr(true)
        }

        else{
            setErrLname('درست است')
            setLname(e.target.value)
            setLnameHasErr(false)
        }

    }





    function SendData() {

        if (fnameHasErr === false && lnameHasErr === false) {
            alert(`${fname} ${lname} ${age} `)
                props.addData({
                    id: id,
                    fname:fname,
                    lname:lname,
                    age:age,
                    html:html,
                    css:css,
                    js:js
                })
        }
        else {
            alert('لطفا اطلاعات را به درستی وارد کنید')
            alert(`مهارت نمیتواند none باشد`)
            LnameValidate({target:{value:lname}})
            FnameValidate({target:{value:fname}})
        }
    }


    function checkHtml(e){
            if (e.target.checked === true){
                setHtml('html')
            }
            else{
                setHtml(null)
            }
    }

    function checkCss(e){
        if (e.target.checked === true){
            setCss('css')
        }
        else{
            setCss(null)
        }
    }

    function checkJs(e){
        if (e.target.checked === true){
            setJs('js')
        }
        else{
            setJs(null)
        }
    }

    return(


        <div className="h-screen bg-indigo-200 flex justify-center items-center">
            <div className="w-full max-w-xs bg-white flex flex-col py-5 px-8 rounded-lg shadow-lg" >

                {/*        INPUT FNAME START             */}
                <div className="mt-3" style={{direction: 'rtl'}}>
                    <label style={{direction: 'rtl' }} className="text-gray-700 font-bold py-2" htmlFor="">نام :</label>

   <span className={` ${ fnameHasErr ? "text-red-700" : "text-green-700"} text-base font-bold mr-1`}>{errfname}</span>

                </div>
                <input style={{direction: 'rtl'}} name="fname" id="fname"
                       onChange={(e)=>FnameValidate(e)}
                    className="text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3"
                    type="text" placeholder="نام"/>
                {/*        INPUT NAME FINISH             */}


                {/*        INPUT LNAME START             */}
                <div className="mt-3" style={{direction: 'rtl'}}>
                    <label style={{direction: 'rtl'}} className="text-gray-700 font-bold py-2" htmlFor="">نام خانوادگی:</label>

 <span className={` ${ lnameHasErr ? "text-red-700" : "text-green-700"} text-base font-bold mr-1`}>{errlname}</span>


                </div>
                    <input style={{direction: 'rtl'}} name="lname" id="lname"
                           onChange={(e)=>LnameValidate(e)}
                        className="text-gray-700 shadow border rounded border-gray-300 mb-3 py-1 px-3 focus:outline-none focus:shadow-outline"
                        type="text" placeholder="نام خانوادگی:"/>
                {/*        INPUT LNAME FINISH             */}



                {/*        INPUT AGE START             */}
                <div className="mt-3"  style={{direction: 'rtl'}}>
                    <label style={{direction: 'rtl'}} className="text-gray-700 font-bold py-2" htmlFor="">سن :</label>

                </div>
                <input min={18} max={100} name="age" id="age"
                       onChange={(e)=>setAge(e.target.value)}
                       defaultValue={age}
                    className="text-gray-700 shadow border rounded border-gray-300 mb-3 py-1 px-3 focus:outline-none focus:shadow-outline"
                    type="number" placeholder="سن"/>
                {/*        INPUT AGE START             */}



                {/*    CHECKBOX START  */}
                <div className="mt-3"   style={{direction: 'rtl'}}>
                    <div className="block ">
                        <span className="text-gray-700 w-full text-center block">مهارت</span>
                        <div className="mt-2 flex w-full justify-evenly">

                            <div>
                                <label className="inline-flex items-center">
                                    <input type="checkbox" value="Html" onChange={(e)=>checkHtml(e)} className="form-checkbox" />
                                    <span className="ml-2">HTML</span>
                                </label>
                            </div>

                            <div>
                                <label className="inline-flex items-center">
                                    <input type="checkbox" value="Css"  onChange={(e)=>checkCss(e)} className="form-checkbox"/>
                                    <span className="ml-2">CSS</span>
                                </label>
                            </div>

                            <div>
                                <label className="inline-flex items-center">
                                    <input type="checkbox" value="Js"  onChange={(e)=>checkJs(e)} className="form-checkbox"/>
                                    <span className="ml-2">JS</span>
                                </label>
                            </div>
                            {/*    CHECKBOX FINISH  */}


                        </div>
                    </div>
                </div>


                <div className="mt-3 border border-indigo-600 py-5 flex justify-evenly"   style={{direction: 'rtl'}}>
                    { html ?  <span> #HTML </span>  : null }
                    { css ?  <span>#CSS</span>   : null }
                    { js ?  <span>#JS</span>  : null }
                </div>

                {/*        INPUT TYPE HIDDEN FOR ID START       */}
                    <input type="hidden" name="id" id="id" defaultValue={id} />
                {/*        INPUT TYPE HIDDEN FOR ID FINISH      */}


                        <div className="flex justify-between items-center my-4">
                            <button onClick={SendData} className="bg-blue-500  w-full hover:bg-blue-700 text-white font-bold rounded py-2 px-4">
                                ارسال
                            </button>
                        </div>

            </div>
        </div>

)
}

 const mapDispatchToProps =dispatch=> {
     return {
         addData: (data) => dispatch(addData(data))
     }
 }

export default connect(null,mapDispatchToProps)(Form)