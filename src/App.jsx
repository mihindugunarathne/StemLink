import { Button } from "@/components/ui/button";
import Hero from "./Hero";
import Navigation from "./Navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

function App() {
  const name = "Manupa";
  const cartCount = 2;

  return (
    <div>
    <Avatar className="absolute top-4 right-4">
     <AvatarImage src="https://github.com/shadcn.png" />
     <AvatarFallback>CN</AvatarFallback>
     </Avatar>
      <Navigation name={name} cartCount={cartCount} />
      <Input className="w-fit p-4 ml-20" />
      <Hero />
      <div className="p-4 w-[500px]">
        <Card className="border-2">
          <CardHeader>
            <Badge className="w-fit">New</Badge>
            <CardTitle>Product Name</CardTitle>
            <CardDescription>Product Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Product Content</p>
          </CardContent>
          <CardFooter>            
            <Button>Buy Now</Button>
            <Checkbox className="absolute right-3/4"></Checkbox>
          </CardFooter>
        </Card>
        
      </div>
    </div>
  );
}

export default App;
