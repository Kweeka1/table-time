import BreadCrumb from '@/components/ui/BreadCrumb';

const BreadCrumbs = () => {
  return (
    <div className="w-full h-8 bg-gray-50 px-12 py-1 flex gap-2">
      <BreadCrumb path="Home" />
      <BreadCrumb path="Netherlands" />
    </div>
  )
}

export default BreadCrumbs;