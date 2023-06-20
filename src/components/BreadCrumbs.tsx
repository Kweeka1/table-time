import BreadCrumb from '@/components/ui/BreadCrumb';
import { capitalize } from '@/lib/utils';

const BreadCrumbs = ({ pathSegments }: { pathSegments: Array<{ name: string; path: string }> }) => {
  return (
    <div className="w-full h-8 bg-gray-50 px-12 py-1 flex gap-2">
      {
        pathSegments.map((segment) =>
          <BreadCrumb 
            path={segment.path} 
            name={capitalize(segment.name.replace(/-/g, ' '))}
            key={segment.path} />
        )
      }
    </div>
  )
}

export default BreadCrumbs;