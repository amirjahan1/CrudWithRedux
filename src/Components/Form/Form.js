import React ,{useState}from 'react'
import './form.css'





const Form = () => {


        const [fname, setFname] = useState('')
        const [fnameHasErr, setFnameHasErr] = useState(true)

        const [lname, setLname] = useState('')
        const [lnameHasErr, setLnameHasErr] = useState(true)

        const [age, setAge] = useState(18)
        const [skill, setSkill] = useState('none')



        const [errfname,setErrFname] = useState('')
        const [errlname,setErrLname] = useState('')


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
            alert(`${fname} ${lname} ${age} ${skill}`)

        }
        else {
            alert('لطفا اطلاعات را به درستی وارد کنید')
            alert(`مهارت نمیتواند none باشد`)
            LnameValidate({target:{value:lname}})
            FnameValidate({target:{value:fname}})
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
                <input Min={18} Max={100} name="age" id="age"
                       onChange={(e)=>setAge(e.target.value)}
                       defaultValue={age}
                    className="text-gray-700 shadow border rounded border-gray-300 mb-3 py-1 px-3 focus:outline-none focus:shadow-outline"
                    type="number" placeholder="سن"/>
                {/*        INPUT AGE START             */}



                {/*     INPUT SKILL START      */}
                <div className="mt-3"   style={{direction: 'rtl'}}>
                    <label style={{direction: 'rtl'}} className="text-gray-700 font-bold py-2" htmlFor="">مهارت :</label>
                </div>
                <select  style={{direction: 'rtl'}} name="skill" id="skill"
                    onChange={(e)=>setSkill(e.target.value)}
                         defaultValue={skill}
                    className="text-gray-700 shadow border rounded border-gray-300 mb-3 py-1 px-3 focus:outline-none focus:shadow-outline"
                  >
                    <option value="Html">Html</option>
                    <option value="Css">Css</option>
                    <option value="Js">Js</option>
                    <option value="none" selected>none</option>
                </select>

                {/*         INPUT SKILL FINISH            */}


                        <div className="flex justify-between items-center my-4">
                            <button onClick={SendData} className="bg-blue-500  w-full hover:bg-blue-700 text-white font-bold rounded py-2 px-4">
                                ارسال
                            </button>
                        </div>

            </div>
        </div>

)
}

export default Form