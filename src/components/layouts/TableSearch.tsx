import SearchForm from "../SearchForm";

const TableSearch = () => {
  return (
    <div className="w-full h-[50vh] bg-gradient-to-r from-[#132049] to-[#677089] flex flex-col gap-8 items-center justify-center">
        <h1 className="text-5xl text-white font-bold">Find your table for any occasion</h1>
        <div className="flex gap-4">
          <SearchForm />
        </div>
    </div>
  )
}

export default TableSearch;