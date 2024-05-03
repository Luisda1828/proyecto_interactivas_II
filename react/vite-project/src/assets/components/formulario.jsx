import '../../index.css';

import { Vinx } from './vinxLogo';
import myImage from '../../assets/components/img/upload.svg';


export function Formulario() {

    return (
        <div className=" bg-sky-600 text-white flex   min-h-svh">
            <div className="flex flex-col justify-center  items-center m-auto p-8 w-[49rem] ">

                <Vinx />


                <section className=" mx-auto max-w-6xl ">
                    <h2 className="  text-4xl font-extrabold text-center  mb-16">Formulario de registro</h2>




                    <form className=" w-[29rem] gap-4 mt-4 justify-start m-auto  ">





                        <div className=" mt-9 p-0 flex justify-center  py-6">
                            <div className="text-center rounded-full  ring-white ring-2 p-10">


                            <img src={myImage} alt="" />

                            </div>

                        </div>


                        <div className="mb-8  justify-center flex text-sm  text-gray-600">
                            <label for="file-upload"
                                className="relative cursor-pointer rounded-md font-semibold text-[var(--clr-yelow-100)] focus-within:outline-none focus-within:ring-2 focus-within:ring-[var(--clr-yelow-100)] focus-within:ring-offset-2 hover:text-[var(--clr-yelow-100)]">
                                <span className=" p-0 flex justify-center   text-white">Cargar imagen</span>
                                <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                            </label>

                        </div>


                        <input
                            className="  p-2 mb-4  ring-2 ring-white rounded-full text-white bg-transparent w-full h-10 focus: outline-none"
                            type="text" value="Nombre" onfocus="clearDefaultValue(this)" onblur="restoreDefaultValue(this)" />

                        <input
                            className="  p-2 mb-4  ring-2 ring-white rounded-full text-white bg-transparent w-full h-10 focus: outline-none"
                            type="text" value="Apellido" onfocus="clearDefaultValue(this)" onblur="restoreDefaultValue(this)" />

                        <input
                            className=" p-2 mb-4 ring-2 ring-white rounded-full text-white bg-transparent w-full h-10 focus: outline-none"
                            type="text" value="Correo" onfocus="clearDefaultValue(this)" onblur="restoreDefaultValue(this)" />
                        <input
                            className=" p-2 mb-4 ring-2 ring-white rounded-full text-white bg-transparent w-full h-10 focus: outline-none"
                            type="text" value="Nombre de usuario" onfocus="clearDefaultValue(this)"
                            onblur="restoreDefaultValue(this)" />
                        <input
                            class="p-2 mb-4 ring-2 ring-white rounded-full text-white bg-transparent w-full h-10 focus: outline-none"
                            type="text" value="Contraseña" onfocus="clearDefaultValue(this)" onblur="restoreDefaultValue(this)" />










                    

                 </form>

                 <input class=" bg-[var(--clr-yelow-100)] flex justify-center items-center my-3 text-center  rounded-full text-white w-full h-10 focus: outline-none" value="Continuar" type="submit" onclick="cambiarPosicionAbsoluta()"/>
                </section>













            </div>
        </div>
    );
}