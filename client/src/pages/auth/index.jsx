import Victory from "@/assets/victory.svg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("")
  // const [phone, setPhone] = useState("")
  const [backgroundImage, setBackgroundImage] = useState("");

  const handleLogin = async () => {
    // Logic xử lý đăng nhập
  };

  const handleSignup = async () => {
    // Logic xử lý đăng ký
  };

  return (
    <div className="h-[100vh] w-[100vw] flex items-center justify-center">
      <div className="h-auto bg-white border-2 border-white text-opacity-90 shadow-2xl w-[80vw] md:w-[90vw] lg:w-[70vw] xl:w-[60vw] rounded-3xl grid xl:grid-cols-2 p-6">
        <div className="flex flex-col gap-10 items-center justify-center">
          <div className="flex items-center justify-center flex-col">
            <div className="flex items-center justify-center">
            </div>
          </div>
          <div className="hidden xl:flex justify-center items-center overflow-hidden">
            <img src={backgroundImage} alt="background login" className="h-60 w-70 object-cover" />
          </div>
        </div>
        <div className="flex items-center justify-center w-full">
          <Tabs className="w-3/4">
            <TabsList className="bg-transparent rounded-none w-full flex justify-between">
              <TabsTrigger className="data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300" value="login">
                Login
              </TabsTrigger>
              <TabsTrigger className="data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300" value="signup">
                Signup
              </TabsTrigger>  
            </TabsList>

            <TabsContent className="flex flex-col gap-5 mt-10" value="login">
              <Input
                placeholder="Email"
                type="email"
                className="p-6"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                placeholder="Password"
                type="password"
                className="p-6"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button className="p-6" onClick={handleLogin}>
                Login
              </Button>
            </TabsContent>
            <TabsContent className="flex flex-col gap-5" value="signup">
              <Input
                placeholder="Email"
                type="email"
                className="p-6"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                placeholder="Password"
                type="password"
                className="p-6"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Input
                placeholder="Confirm Password"
                type="password"
                className="p-6"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <Input
                placeholder="Phone"
                type="Phone"
                className="p-6"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <Button className="p-6" onClick={handleSignup}>
                Signup
              </Button>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Auth;
