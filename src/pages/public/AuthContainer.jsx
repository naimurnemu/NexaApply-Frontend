import { Button } from "@/components/ui/button";
import React from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

const AuthContainer = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  console.log(location.pathname);
  return (
    <div className="grid grid-cols-2 min-h-screen">
      <div className="relative">
        <div
          className="absolute inset-0 bg-cover bg-center filter grayscale"
          style={{
            backgroundImage:
              "url(https://c4.wallpaperflare.com/wallpaper/655/981/65/selective-focus-photography-of-pink-waterlily-flower-wallpaper-preview.jpg)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30" />

        <div className="relative z-10 flex flex-col h-full px-12 text-white">
          <div className="w-48 h-16 mt-8">
            <Link to="/" className="text-3xl font-bold text-blue-600">
              NexaApply
            </Link>
          </div>

          <div className="flex-grow flex items-center justify-center">
            <div className="space-y-6 text-center">
              <h1 className="text-white text-5xl font-bold">
                Welcome to NexaApply
              </h1>
              <p className="text-amber-50 text-lg">
                Experience a revolutionary approach to college applications.
                Navigate your academic journey with ease and precision.
              </p>
            </div>
          </div>

          <div className="mb-8 text-center">
            <div className="space-x-4">
              {!pathname.includes("register") ? (
                <Button
                  onClick={() => navigate("/auth/register")}
                  className="px-6 py-2 text-white"
                >
                  Register
                </Button>
              ) : null}
              {!pathname.includes("login") ? (
                <Button
                  onClick={() => navigate("/auth/login")}
                  variant="outline"
                  className="px-6 py-2 text-black"
                >
                  Login
                </Button>
              ) : null}
            </div>
            {!pathname.includes("admin") ? (
              <Button
                onClick={() => navigate("/auth/admin")}
                variant="link"
                className="mt-3 text-white"
              >
                Admin Login
              </Button>
            ) : null}

            <Button
              onClick={() => navigate("/")}
              variant="link"
              className="mt-2 text-white"
            >
              ← Back to Home
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-background overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthContainer;
