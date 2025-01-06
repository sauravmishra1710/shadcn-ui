import { Button } from "src/components/ui/button";
import { Input } from "src/components/ui/input";
import { Label } from "src/components/ui/label";
import { Card, CardHeader, CardContent, CardFooter } from "src/components/ui/card";
import { Separator } from "src/components/ui/separator"
import { FaGithub } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { useState } from "react";


const SignupForm = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <div
      className={`flex items-center justify-center min-h-screen ${
        isDarkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"
      }`}
    >
      <Card className={`w-full max-w-md p-4 shadow-lg ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}>
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
              <Label htmlFor="email" className="block text-sm font-medium">
                Email
              </Label>
              <Input
                id="email"
                type="text"
                placeholder="Enter your email"
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
        
        <CardFooter className="mt-2 space-y-4">
          <Button variant="default" className="w-full bg-blue-700 text-white">
            Create Account
          </Button>
        </CardFooter>

        <div className="text-center">
          <Separator />
          <p className={`text-sm ${isDarkMode ? "text-gray-100" : "text-gray-900"}`}>OR</p> 
          <Button variant="outline" className={`w-11/12 mt-2 ${
            isDarkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"
            }`}>
            <FaGithub className="text-lg" />
            Continue with GitHub
          </Button>
        </div>
      </Card>

      <div className={`absolute top-4 right-4 ${isDarkMode ? "bg-black" : "bg-white"}`}> 
        <Button
          variant="default"
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="text-sm"
        >
          {isDarkMode ? <CiLight/> : <MdDarkMode/>}
        </Button>
      </div>

    </div>
  );
};

export default SignupForm;