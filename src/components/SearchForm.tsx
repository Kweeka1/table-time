"use client"

import { Clock, User2 } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import SelectBox from "./SelectBox";
import { useState } from "react";
import { DatePicker } from "./DatePicker";
import { generateTimesUntilMidnight } from "@/lib/utils";

const SearchForm = () => {
	const [date, setDate] = useState<Date>(new Date());

	return (
		<>
			<div className="flex w-[500px]">
				<DatePicker 
					className="w-full h-12 bg-white rounded-r-none border-r-gray-200"
					date={date} 
					setDate={setDate} 
				/>
				<SelectBox
					icon={<Clock />}
					className="bg-white rounded-none border-r-gray-200"
					placeholder="Time"
					items={generateTimesUntilMidnight()}
				/>
				<SelectBox
					icon={<User2 />}
					className="bg-white rounded-sm rounded-l-none border-r-gray-200"
					placeholder="Party size"
					items={Array.from(Array(20), (_, i) => `${i} people`)}
				/>
			</div>
			<div className="flex gap-4">
				<Input type="text" placeholder="Location, Restaurant, or Cuisine" className="bg-white rounded-sm placeholder:font-semibold placeholder:text-slate-400" />
				<Button type="button" className="h-12 w-48 bg-[#B8222D] opacity-100 font-semibold hover:opacity-100 hover:bg-red-600 rounded-sm">Let's go</Button>
			</div>
		</>
	)
}

export default SearchForm