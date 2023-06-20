import Image from "next/image"
import { HiSearch } from "react-icons/hi"
import CitiesDropdown from "./citiesNavLink"
import { Button } from "./ui/button"


const Header = ({
    city
  }: {
    city: string
  }) => {
  return (
    <header className="w-full items-center bg-gray-50">
      <div className="w-full flex items-center flex-row px-8">
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
            <CitiesDropdown city={city} />
          </div>
          <div className="flex gap-4 items-center">
            <Button variant="signIn">Sign in</Button>
            <HiSearch className="cursor-pointer" size={24} />
          </div>
        </div>
      </div>
      <div className="w-full border-t border-gray-200">

      </div>
    </header>
  )
}

export default Header;