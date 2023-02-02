import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"        // necesario para trabajar rutas
import Context from '../context/StaticContext'
import logo from '../assets/descarga.png'
import portada from '../assets/portada-stucki-1.jpg'
// import "../App.css"
// import { Landing, HomeRoute, Dashboard, NotasRoute } from "../routes/rutas"        // permite traer la funcion 'landing' 
import '../../index.css'

//Prime React
import { Image } from 'primereact/image';
import { InputSwitch } from 'primereact/inputswitch';
//import { useFormik } from 'formik';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { Password } from 'primereact/password';
import { Checkbox } from 'primereact/checkbox';
import { Dialog } from 'primereact/dialog';
//import { Divider } from 'primereact/divider';
import { classNames } from 'primereact/utils';
//import { CountryService } from '../service/CountryService';

export const Login = () => {

    // const formik = useFormik({
    // });

    // const goHome = () => {
    //     <App />
    // }

    // function Navigation(
    //     // { children }
    // ) {

    //     let value = true;

    //     return <>
    //         {/* 
    //         <div >
    //             <Image src={portada} template="Preview Content" alt="portada" />

                
    //         </div> */}

    //         <div className="form-demo">
    //             {/* <Dialog visible={showMessage} onHide={() => setShowMessage(false)} position="top" footer={dialogFooter} showHeader={false} breakpoints={{ '960px': '80vw' }} style={{ width: '30vw' }}>
    //                                 <div className="flex align-items-center flex-column pt-6 px-3">
    //                                     <i className="pi pi-check-circle" style={{ fontSize: '5rem', color: 'var(--green-500)' }}></i>
    //                                     <h5>Registration Successful!</h5>
    //                                     <p style={{ lineHeight: 1.5, textIndent: '1rem' }}>
    //                                         Your account is registered under name <b>{formData.name}</b> ; it'll be valid next 30 days without activation. Please check <b>{formData.email}</b> for activation instructions.
    //                                     </p>
    //                                 </div>
    //                             </Dialog> */}

    //             {/* <InputSwitch checked={value} onClick={() => {
    //                 console.log("value", value);
    //                 value = false
    //             }} 
    //              checked={value} onChange={(e) => setValue(e.value)}
    //             /> */}

    //             <div className="flex justify-content-center ">
    //                 <div className="card">
    //                     <Image src={logo} template="Preview Content" alt="logo" />
    //                     <h1 className="text-center">Register</h1>
    //                     {/* <form onSubmit={formik.handleSubmit} className="p-fluid"> */}
    //                     <form className="p-fluid">
    //                         <div className="field">
    //                             <span className="p-float-label">
    //                                 <InputText id="name" name="name" />
    //                                 <label htmlFor="name" >Name*</label>
    //                             </span>
    //                             {/* {getFormErrorMessage('name')} */}
    //                         </div>
    //                         <div className="field">
    //                             <span className="p-float-label p-input-icon-right">
    //                                 <i className="pi pi-envelope" />
    //                                 <InputText id="email" name="email" />
    //                                 <label htmlFor="email" >Email*</label>
    //                             </span>
    //                             {/* {getFormErrorMessage('email')} */}
    //                         </div>
    //                         <div className="field">
    //                             <span className="p-float-label">
    //                                 <Password id="password" name="password" toggleMask />
    //                                 <label htmlFor="password" >Password*</label>
    //                             </span>
    //                             {/* {getFormErrorMessage('password')} */}
    //                         </div>
    //                         <div className="field">
    //                             <span className="p-float-label">
    //                                 {/* <Calendar id="date" name="date" value={formik.values.date} onChange={formik.handleChange} dateFormat="dd/mm/yy" mask="99/99/9999" showIcon /> */}
    //                                 <Calendar id="date" name="date" dateFormat="dd/mm/yy" mask="99/99/9999" showIcon />
    //                                 <label htmlFor="date">Birthday</label>
    //                             </span>
    //                         </div>
    //                         <div className="field">
    //                             <span className="p-float-label">
    //                                 <Dropdown id="country" name="country" optionLabel="name" />
    //                                 <label htmlFor="country">Country</label>
    //                             </span>
    //                         </div>
    //                         <div className="field-checkbox">
    //                             <Checkbox inputId="accept" name="accept" />
    //                             <label htmlFor="accept" >I agree to the terms and conditions*</label>
    //                         </div>

    //                         <Link to="/notas" className='nav_link'>
    //                             <Button type="submit" label="Submit" className="mt-2" />
    //                         </Link>
    //                     </form>
    //                 </div>
    //             </div>
    //         </div>
    //     </>
    // }

    return (

        <div className="form-demo ">
                {/* <Dialog visible={showMessage} onHide={() => setShowMessage(false)} position="top" footer={dialogFooter} showHeader={false} breakpoints={{ '960px': '80vw' }} style={{ width: '30vw' }}>
                                    <div className="flex align-items-center flex-column pt-6 px-3">
                                        <i className="pi pi-check-circle" style={{ fontSize: '5rem', color: 'var(--green-500)' }}></i>
                                        <h5>Registration Successful!</h5>
                                        <p style={{ lineHeight: 1.5, textIndent: '1rem' }}>
                                            Your account is registered under name <b>{formData.name}</b> ; it'll be valid next 30 days without activation. Please check <b>{formData.email}</b> for activation instructions.
                                        </p>
                                    </div>
                                </Dialog> */}

                {/* <InputSwitch checked={value} onClick={() => {
                    console.log("value", value);
                    value = false
                }} 
                 checked={value} onChange={(e) => setValue(e.value)}
                /> */}

                <div className="flex justify-content-center ">
                    <div className="card">
                        <Image src={logo} template="Preview Content" alt="logo" />
                        <h1 className="text-center">Register</h1>
                        {/* <form onSubmit={formik.handleSubmit} className="p-fluid"> */}
                        <form className="p-fluid">
                            <div className="field">
                                <span className="p-float-label">
                                    <InputText id="name" name="name" />
                                    <label htmlFor="name" >Name*</label>
                                </span>
                                {/* {getFormErrorMessage('name')} */}
                            </div>
                            <div className="field">
                                <span className="p-float-label p-input-icon-right">
                                    <i className="pi pi-envelope" />
                                    <InputText id="email" name="email" />
                                    <label htmlFor="email" >Email*</label>
                                </span>
                                {/* {getFormErrorMessage('email')} */}
                            </div>
                            <div className="field">
                                <span className="p-float-label">
                                    <Password id="password" name="password" toggleMask />
                                    <label htmlFor="password" >Password*</label>
                                </span>
                                {/* {getFormErrorMessage('password')} */}
                            </div>
                            <div className="field">
                                <span className="p-float-label">
                                    {/* <Calendar id="date" name="date" value={formik.values.date} onChange={formik.handleChange} dateFormat="dd/mm/yy" mask="99/99/9999" showIcon /> */}
                                    <Calendar id="date" name="date" dateFormat="dd/mm/yy" mask="99/99/9999" showIcon />
                                    <label htmlFor="date">Birthday</label>
                                </span>
                            </div>
                            <div className="field">
                                <span className="p-float-label">
                                    <Dropdown id="country" name="country" optionLabel="name" />
                                    <label htmlFor="country">Country</label>
                                </span>
                            </div>
                            <div className="field-checkbox">
                                <Checkbox inputId="accept" name="accept" />
                                <label htmlFor="accept" >I agree to the terms and conditions*</label>
                            </div>

                            <Link to="/Home" className='nav_link'>
                                <Button type="submit" label="Submit" className="mt-2" />
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        // <BrowserRouter>
        //     <Navigation>
        //         <Routes>
        //             <Route path="/" element={<Login />} />
        //             <Route path="/notas" element={<NotasRoute />} />
        //             <Route path="/home" element={<Home />} />
        //         </Routes>
        //     </Navigation>
        // </BrowserRouter>
    )
}
