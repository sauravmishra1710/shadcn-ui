import { Button } from "src/components/ui/button";
import { Input } from "src/components/ui/input";
import { Label } from "src/components/ui/label";
import {Card, CardHeader, CardContent, CardFooter} from "src/components/ui/card";
import { FaGithub } from "react-icons/fa";


const SignupForm = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md p-4 shadow-lg">
        <CardHeader className="text-center mb-4">
          <h2 className="text-2xl font-bold">Sign up</h2>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div>
              <Label htmlFor="full-name" className="block text-sm font-medium">
                Full Name
              </Label>
              <Input
                id="full-name"
                type="text"
                placeholder="Enter your full name"
                className="w-full mt-1"
              />
            </div>

            <div>
              <Label htmlFor="username" className="block text-sm font-medium">
                Username
              </Label>
              <Input
                id="username"
                type="text"
                placeholder="Choose a username"
                className="w-full mt-1"
              />
            </div>

            <div>
              <Label htmlFor="password" className="block text-sm font-medium">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Create a password"
                className="w-full mt-1"
              />
            </div>

            <div>
              <Label htmlFor="confirm-password" className="block text-sm font-medium">
                Confirm Password
              </Label>
              <Input
                id="confirm-password"
                type="password"
                placeholder="Confirm your password"
                className="w-full mt-1"
              />
            </div>
          </form>
        </CardContent>
        
        <CardFooter className="mt-6 space-y-4">
          <Button variant="default" className="w-full">
            Create Account
          </Button>
          </CardFooter>

          <div className="text-center">
            <p className="text-sm text-gray-600">OR</p> 
            <Button variant="outline" className="w-full mt-2">
                <FaGithub className="text-lg" />
                Continue with GitHub
            </Button>
          </div>
      </Card>
    </div>
  );
};

export default SignupForm;