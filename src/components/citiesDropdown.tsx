const cities = [
  "Atlanta Metro",
  "Austin",
  "Baltimore",
  "Chicago / Illinois",
  "Dallas Fort Worth",
  "Denver",
  "Detroit / Eastern Michigan",
  "Houston",
  "Los Angeles",
  "Miami",
  "New York",
]

const CitiesDropdown = () => {
  return (
    <div className="w-[650px] h-[450px] flex flex-col">
      <div className="flex h-full">
        <div className="w-full">
          <div className="p-4 border-b border-gray-200">
            <p className="text-[16px] font-medium">Metro</p>
          </div>
          <div className="h-[87%] overflow-x-hidden overflow-y-scroll border-r border-gray-200">
            {cities.map((city) => (
              <p className="text-[16px] text-gray-500 py-3 px-3 cursor-pointer border-l-4 border-l-white hover:text-[#247f9e] hover:bg-[#247f9e20] hover:border-l-4 hover:border-l-[#247f9e]" key={city}>{city}</p>
            ))}
          </div>
        </div>
        <div className="w-full">
          <div className="p-4 border-b border-gray-200">
            <p className="text-[16px] font-medium">Region</p>
          </div>
          <div className="h-[87%] overflow-x-hidden overflow-y-scroll">
            {cities.map((city) => (
              <p className="text-[16px] text-gray-500 py-3 px-3 cursor-pointer border-l-4 border-l-white hover:text-[#247f9e] hover:bg-[#247f9e20] hover:border-l-4 hover:border-l-[#247f9e]" key={city}>{city}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CitiesDropdown