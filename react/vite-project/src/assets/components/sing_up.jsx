import '../../index.css';
import { Inputs } from './inputs';
import { Button } from './button';
import { LoginGoogleTwo } from './loginGoogleTwo';
import { Vinxx } from './vinxLogoSingUp.jsx';

export function Sing_up() {
  return (
    <div className="overflow-y-hidden bg-sky-600 text-white flex min-h-svh">
      <div className="flex flex-col justify-center items-center m-auto p-8 w-[29rem]">
        <Vinxx />
        <Button text="New user" address="#" />
        <hr className="w-full" />
        <LoginGoogleTwo/>
        <a href="singup.html">Sing-up</a>
      </div>
    </div>
  );
}
