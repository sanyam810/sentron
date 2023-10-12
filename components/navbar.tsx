"use client";

import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent, DropdownMenuSeparator, DropdownMenuLabel} from "./ui/dropdown-menu";

const Navbar = () => {
    return (
        <div className="bg-transparant flex justify-end p-4 gap-5 pb-16"> 
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
            <Button variant="secondary">Get Started</Button>
        </div>
    );
}
 
export default Navbar;