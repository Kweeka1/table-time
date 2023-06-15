"use client"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { HiOutlineLocationMarker } from "react-icons/hi"

const CitiesDropdown = ({ city }: { city: string }) => {
  return (
    <div>
      <NavigationMenu>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="gap-2">
            <HiOutlineLocationMarker size={24} />
            <p>{city}</p>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>Link</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenu>
    </div>
  )
}

export default CitiesDropdown