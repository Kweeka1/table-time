"use client"

import Image from "next/image"
import { HiSearch } from "react-icons/hi"
import CitiesDropdown from "./citiesNavLink"
import { Button } from "./ui/button"
import BreadCrumbs from "./BreadCrumbs"
import { usePathname } from "next/navigation"
import { capitalize, getPathSegments } from "@/lib/utils"


const Header = () => {
  const pathname = usePathname();
  const pathSegments = getPathSegments(pathname);
  
  return (
    <header className="w-full items-center bg-gray-50">
      <div className="w-full flex items-center flex-row px-8 border-b border-b-gray-200">
        <div className="border-r p-3 border-gray-200">
          <Image
            src="/logo.svg"
            alt="logo"
            width={160}
            height={36}
          />
        </div>
        <div className="w-full flex justify-between items-center">
          <div className="flex items-center pl-2">
            <CitiesDropdown city={capitalize(pathSegments[1]?.name || '')} />
          </div>
          <div className="flex gap-4 items-center">
            <Button size="xs" variant="signIn">Sign in</Button>
            <HiSearch className="cursor-pointer" size={24} />
          </div>
        </div>
      </div>
      <BreadCrumbs pathSegments={pathSegments} />
    </header>
  )
}

export default Header;