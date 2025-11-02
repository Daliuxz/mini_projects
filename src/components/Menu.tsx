import Link from "next/link";

export const Menu = () => {
    return (
        <menu className="w-72 mx-auto text-center pt-10">
            <ul>
                <li>
                    <Link href="/ssr-landing" className="mb-5 p-3 block w-full bg-slate-300 hover:bg-slate-600 rounded text-black">
                        Landing Page - SSR
                    </Link> 
                </li>
                <li>
                    <Link href="/csr-passwords" className="mb-5 p-3 block w-full bg-slate-300 hover:bg-slate-600 rounded text-black">
                        Generador de contraseñas - CSR
                    </Link> 
                </li>
                <li>
                    <Link href="/dr-dynamic" className="mb-5 p-3 block w-full bg-slate-300 hover:bg-slate-600 rounded text-black">
                        DragonBall API - DR
                    </Link> 
                </li>
            </ul>
        </menu>
    );
}