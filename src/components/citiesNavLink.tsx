"use client"

import CitiesDropdown from "./citiesDropdown"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { ChevronDown, MapPin } from "lucide-react"

const CitiesNavLink = ({ city }: { city: string }) => {
  return (
    <Popover>
      <PopoverTrigger className="px-3 py-2 w-auto" asChild>
        <Button
          variant={"borderless"}
          className="justify-start text-left font-normal"
        >
          <MapPin />
          <p className="mx-1">{city}</p>
          <ChevronDown size={14} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 absolute left-[-8rem]">
        <CitiesDropdown />
      </PopoverContent>
    </Popover>
  )
}

export default CitiesNavLink;