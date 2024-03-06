import Image from "next/image";
import { koinx } from "@/public";
import Link from "next/link";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
    const navLinks = [
        {
            id: 1,
            title: "Crypto Taxes",
            link: "/",
        },
        {
            id: 2,
            title: "Free Tools",
            link: "/",
        },
        {
            id: 3,
            title: "Resource Center",
            link: "/",
        },
    ] as const;

    return (
        <header className="w-full bg-white p-2">
            <nav className="m-3 flex items-start justify-between">
                <Link href="/">
                    <Image src={koinx} alt="logo" width={65} height={65} />
                </Link>
                {/** Desktop Navbar */}
                <div className="hidden sm:block">
                    <div className="flex items-center gap-12">
                        {navLinks.map(link => (
                            <div className="font-semibold" key={link.id}>
                                {link.title}
                            </div>
                        ))}
                        <Button>Get Started</Button>
                    </div>
                </div>
                {/** Mobile Device */}
                <div className="block sm:hidden">
                    <Sheet>
                        <SheetTrigger>
                            <Menu />
                        </SheetTrigger>
                        <SheetContent className="py-12">
                            <SheetHeader>
                                <div className="grid items-center gap-8">
                                    {navLinks.map(link => (
                                        <div
                                            className="font-semibold"
                                            key={link.id}
                                        >
                                            {link.title}
                                        </div>
                                    ))}
                                    <Button>Get Started</Button>
                                </div>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
