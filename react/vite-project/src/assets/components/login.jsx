import '../../index.css'
import { Inputs } from './inputs';
import { Button } from './button';
import { LoginGoogle } from './logingoogle';
import { Vinx } from './vinxLogo';

 export function Login() {

 return (
    <div className=" bg-sky-600 text-white flex   min-h-svh">
    <div className="flex flex-col justify-center items-center m-auto p-8 w-[29rem] ">

        <Vinx />
        <Inputs text="Usuario" />
        <Inputs text="Contraseña" />

      <a
        className="ml-[64%] text-sm text-nowrap"
        href="#"
      >
        Olvidó su contraseña?
      </a>

        <Button text="Iniciar Sesion" address="#" />

      <hr className="w-full" />
      <LoginGoogle/>
      <a href="singup.html">
        Registrarse
      </a>
    </div>
    <a href="singup.html">
    </a>
  </div>
 );
 }