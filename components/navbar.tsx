"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent, DropdownMenuSeparator, DropdownMenuLabel} from "./ui/dropdown-menu";

const Navbar = () => {
    return (
        <div className="bg-transparant flex justify-end p-4 gap-5 pb-24"> 
            <div className="mr-auto">
                <DropdownMenu>
                    <DropdownMenuTrigger>Sentron</DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>Profile</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Billing</DropdownMenuItem>
                        <DropdownMenuItem>Team</DropdownMenuItem>
                        <DropdownMenuItem>Subscription</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <Button variant="ghost">About</Button>
            <Button variant="ghost">FAQ</Button>
            <Link href="/train">
                <Button variant="secondary">Get Started</Button>
            </Link>
        </div>
    );
}
 
export default Navbar;