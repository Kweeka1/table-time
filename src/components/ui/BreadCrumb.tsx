const BreadCrumb = ({ path }: { path: string }) => {
  return (
    <div className="w-fit h-full flex justify-center items-center relative">
      <span className="text-[#247f9e] text-xs font-light pb-[0.075rem]">{path}</span>
      <div className="top-[-0.625rem] border-l-[0.6rem] border-l-gray-200 border-t-[1rem] border-t-transparent border-b-[1rem] border-b-transparent ml-2"></div>
      <div className="absolute right-[3px] top-[-0.2rem] border-l-[0.56rem] border-l-gray-50 border-t-[0.96rem] border-t-transparent border-b-[0.96rem] border-b-transparent"></div>
    </div>
  )
}

export default BreadCrumb