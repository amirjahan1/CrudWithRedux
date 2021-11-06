import {connect} from 'react-redux';
import {removeData} from "../../Redux/Action/Actions";
import React, {useEffect , useState} from "react";
import {Link} from "react-router-dom";

const User = (props) => {






    return(
        <div className="flex flex-col w-8/12 mx-auto mt-32">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div
                        className=" shadow overflow-hidden  border-b border-gray-200 sm:rounded-lg text-center" >
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                            <tr>
                                <th
                                    scope="col"
                                    className=" text-center px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider " >
                                    ID
                                </th>
                                <th
                                    scope="col"
                                    className=" text-center px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider " >
                                   نام
                                </th>
                                <th
                                    scope="col"
                                    className=" text-center px-6 py-3 text-left text-xs font-medium  text-gray-500  uppercase tracking-wider  " >
                                  نام خانوادگی
                                </th>
                                <th
                                    scope="col"
                                    className=" text-center px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider " >
                                    سن
                                </th>
                                <th
                                    scope="col"
                                    className=" px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase  tracking-wider text-center" >
                                    مهارت
                                </th>

                                <th
                                    scope="col"
                                    className="  px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-center " >
                                    ویرایش
                                </th>

                                <th
                                    scope="col"
                                    className=" px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-center " >
                                    حذف
                                </th>


                            </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">


                            {

                                    props.user.map( item => (

                                            <tr key={item.id}>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <div className="ml-4">
                                                            <div className="text-sm font-medium text-gray-900 text-center">
                                                                {item.id}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <div className="ml-4">
                                                            <div className="text-sm font-medium text-gray-900 text-center">
                                                                {item.fname}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>

                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm font-medium text-gray-900 text-center">
                                                        {item.lname}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-500 text-center">
                                                        {item.age}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                                                    {item.skill}
                                                </td>
                  <td className=" px-6 py-4 whitespace-nowrap  text-center text-sm font-medium " >
                <Link to={`/edit/${item.id}/${item.fname}/${item.lname}/${item.age}/${item.skill}`}  className="text-indigo-600 hover:text-indigo-900" >Edit</Link>

                </td>

                                                <td className="  px-6 py-4 whitespace-nowrap text-sm text-center font-medium " >
     <span  className="text-red-600 hover:text-red-900 cursor-pointer "
            onClick={()=>props.removeItem(item.id)}>
                                                    Delete</span>

                                                </td>
                                            </tr>
                                    ))

                                   
                            }



                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.FormDetails.formDetail
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeItem: (id) => dispatch(removeData(id))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(User)