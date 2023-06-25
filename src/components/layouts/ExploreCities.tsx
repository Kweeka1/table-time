import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Title from "../ui/Title";

const ExploreCities = () => {
  return (
    <div>
      <Title className="py-5">Explore TimeTable</Title>
      <Tabs defaultValue="national" className="w-full">
        <TabsList className="bg-white">
          <TabsTrigger value="national">National cities/regions</TabsTrigger>
          <TabsTrigger value="international">International cities/regions</TabsTrigger>
          <TabsTrigger value="nearby">Nearby</TabsTrigger>
        </TabsList>
        <TabsContent value="national">Make changes to your account here.</TabsContent>
        <TabsContent value="international">Change your password here.</TabsContent>
        <TabsContent value="nearby">Change your password here.</TabsContent>
      </Tabs>
    </div>
  )
}

export default ExploreCities;