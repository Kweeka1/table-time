"use client"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { HiOutlineLocationMarker } from "react-icons/hi"
import CitiesDropdown from "./citiesDropdown"

const CitiesNavLink = ({ city }: { city: string }) => {
  return (
    <div>
      <NavigationMenu>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="gap-2">
            <HiOutlineLocationMarker size={24} />
            <p>{city}</p>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>
              <CitiesDropdown />
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenu>
    </div>
  )
}

export default CitiesNavLink;