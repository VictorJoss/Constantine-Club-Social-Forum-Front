import Link from "next/link";
import ccLogo from "@/images/cclogo.png"
import Image from "next/image";
import {HomeIcon, LogOut, UserRound} from "lucide-react";

export function PageMenu(){
    return(
        <nav className="flex flex-auto m-auto w-full px-4">
            <div className="flex flex-col gap-2">
                <Link href="/" className="flex max-w-[64px] gap-4 rounded-full p-4 hover:bg-menu-hover text-lg">
                <div>
                    <Image src={ccLogo} width={100} height={100} alt="Club Constantine"></Image>
                </div>
                </Link>
                <Link href="/" className="flex gap-4 rounded-full p-4 hover:bg-menu-hover text-lg">
                <div>
                    <HomeIcon></HomeIcon>
                </div>
                <div>Home</div>
                </Link>
                <Link href="/" className="flex gap-4 rounded-full p-4 hover:bg-menu-hover text-lg">
                <div>
                    <UserRound></UserRound>
                </div>
                <div>Perfil</div>
                </Link>
                <Link href="/" className="flex gap-4 rounded-full p-4 hover:bg-menu-hover text-lg">
                <div>
                    <LogOut></LogOut>
                    <div>Salir</div>
                </div>
                </Link>
            </div>
        </nav>
    );
}