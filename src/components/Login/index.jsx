import React from 'react'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import TextField from '@mui/material/TextField';
import style from "./index.module.css"
import { Button, Link } from '@mui/material';
import { Checkbox, FormControlLabel } from '@mui/material';
// import { CheckBox } from '@mui/icons-material';


function Login() {
    return (
        <div className={style.main}>
            <LockOutlinedIcon className={style.icon} />
            <p >Sign in</p>

            <TextField className={style.input} id="outlined-basic" label="Email Address*" variant="outlined" />
            <br /><br /><br />
            <TextField className={style.input} id="outlined-basic" label="Password*" variant="outlined" />
            <div className={style.check}>
                <FormControlLabel  control={<Checkbox defaultChecked />} label="Remember me" />

            </div>
            <div className={style.wrapper}>
                <Button className={style.signBtn} variant="contained">SIGN IN</Button>
                <div className={style.links}>
                    <Link className={style.link} href="#">Forgot password?</Link>
                    <Link className={style.link} href="#">Don'thave an account?Sign Up</Link>
                </div>
            </div>
            <p className={style.paragraph}>
                Copyright ©
                <Link href="#" color="inherit">Your Website </Link>
                2023.
            </p>

        </div>
    )
}

export default Login