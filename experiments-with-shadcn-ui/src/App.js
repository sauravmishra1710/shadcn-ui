import { Button } from "src/components/ui/button";
import { Input } from "src/components/ui/input";
import { Label } from "src/components/ui/label";

import SignupForm from "./SignupForm";


export default function App() {
  return (
    <div className="items-center space-x-2">
      {/* <div><Label htmlFor="email">Email</Label></div>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input type="email" id="email" placeholder="Email"></Input>
        <Button onClick={() => alert("from shadcn btn")}>Subscribe</Button>
      </div> */}
      <SignupForm></SignupForm>
    </div>
  )
}
