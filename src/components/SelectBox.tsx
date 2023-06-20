import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { FC, ReactNode } from "react"

interface SelectBoxProps {
  placeholder: string
  items: string[]
  className?: string
  icon?: ReactNode
}

const SelectBox: FC<SelectBoxProps> = ({ placeholder, items, className, icon }) => {
  return (
    <Select>
      <SelectTrigger className={className}>
        {icon}
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {items.map((item) => (
            <SelectItem value={item} key={item.replace(/ /g, "-")}>{item}</SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default SelectBox