"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useAuth } from "@/hooks/auth/useAuth";
import { useToast } from "@/hooks/useToast";
import { useRouter } from "next/navigation";
import { useProfile } from "@/server/useProfile";

// Zod schema for validation
const loginSchema = z.object({
  email: z.email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordField, setShowPasswordField] = useState(false);

  const auth = useAuth();
  const login = auth?.login;
  const loading = auth?.loading ?? false;
  const { success, error } = useToast();

  const navigation = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  // Watch email field to trigger password field appearance
  const emailValue = watch("email");

  // Show password field when email is valid
  const emailIsValid = z.string().email().safeParse(emailValue).success;

  // Animate password field appearance
  if (emailIsValid && !showPasswordField) setShowPasswordField(true);
  if (!emailIsValid && showPasswordField) setShowPasswordField(false);

  const onSubmit = async (data: LoginFormValues) => {
    if (login) {
      await login(data.email, data.password)
        .then(() => {
          success("User Successfully Logged In.");
        })
        .catch((err: any) => {
          // Map Firebase Auth errors to human-readable messages
          let message = "Error while logging in.";

          if (err?.code) {
            switch (err.code) {
              case "auth/invalid-email":
                message = "The email address is not valid.";
                break;
              case "auth/user-disabled":
                message = "This user account has been disabled.";
                break;
              case "auth/user-not-found":
                message = "No account found with this email.";
                break;
              case "auth/wrong-password":
                message = "Incorrect password. Please try again.";
                break;
              case "auth/too-many-requests":
                message = "Too many failed attempts. Please try again later.";
                break;
              case "auth/network-request-failed":
                message = "Network error. Please check your connection.";
                break;
              case "auth/internal-error":
                message = "Internal error. Please try again.";
                break;
              case "auth/invalid-credential":
                message =
                  "No user found with these credentials. Please register first.";
                break;
              default:
                message = "An unexpected error occurred. Please try again.";
            }
          }
          error(message);
        });
    } else {
      error("Login function is not available.");
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4">
      <div>
        <div
          className={cn(
            "bg-white rounded-2xl shadow-2xl border border-gray-100 p-8",
            className
          )}
          {...props}
        >
          <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
            <fieldset disabled={loading} className="flex flex-col gap-6">
              {/* Logo and Header Section */}
              <div className="flex flex-col items-center gap-4">
                <Link
                  href="/"
                  className="flex flex-col items-center gap-3 font-medium group"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                    <div className="relative flex size-28 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg overflow-hidden group-hover:scale-105 transition-transform duration-300">
                      <Image
                        src={"/images/Gasflow.png"}
                        width={400}
                        height={400}
                        alt="Gasflow Logo"
                        priority
                        className="w-20 h-20 object-contain"
                      />
                    </div>
                  </div>
                  <span className="sr-only">Gasflow By Biznhand</span>
                </Link>

                <div className="text-center space-y-2">
                  <h1 className="text-2xl font-bold text-gray-900">
                    Welcome Back
                  </h1>
                  <p className="text-gray-600">
                    Sign in to your Gasflow account
                  </p>
                </div>

                <div className="text-center text-sm bg-gray-50 rounded-lg px-4 py-2 border">
                  <span className="text-gray-600">Don't have an account? </span>
                  <Link
                    href="/register"
                    className="font-semibold text-blue-600 hover:text-blue-700 transition-colors duration-200"
                  >
                    Register Now
                  </Link>
                </div>
              </div>

              {/* Form Fields */}
              <div className="flex flex-col gap-5">
                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    autoComplete="username"
                    {...register("email")}
                    aria-invalid={!!errors.email}
                    disabled={loading}
                    className="h-11 rounded-lg border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                  />
                  {errors.email && (
                    <span className="text-xs text-red-500 font-medium flex items-center gap-1">
                      <svg
                        className="w-3 h-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {errors.email.message}
                    </span>
                  )}
                </div>

                <AnimatePresence>
                  {showPasswordField && (
                    <motion.div
                      key="password"
                      initial={{ opacity: 0, y: -10, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: "auto" }}
                      exit={{ opacity: 0, y: -10, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="space-y-2"
                    >
                      <Label
                        htmlFor="password"
                        className="text-sm font-medium text-gray-700"
                      >
                        Password
                      </Label>
                      <div className="relative">
                        <Input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          autoComplete="current-password"
                          {...register("password")}
                          aria-invalid={!!errors.password}
                          className="h-11 rounded-lg border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 pr-11"
                          disabled={loading}
                        />
                        <button
                          type="button"
                          tabIndex={-1}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                          onClick={() => setShowPassword((v) => !v)}
                          aria-label={
                            showPassword ? "Hide password" : "Show password"
                          }
                          disabled={loading}
                        >
                          {showPassword ? (
                            <EyeOff size={18} />
                          ) : (
                            <Eye size={18} />
                          )}
                        </button>
                      </div>
                      {errors.password && (
                        <span className="text-xs text-red-500 font-medium flex items-center gap-1">
                          <svg
                            className="w-3 h-3"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {errors.password.message}
                        </span>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>

                <Button
                  type="submit"
                  className="w-full h-11 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02]"
                  disabled={
                    loading ||
                    !emailIsValid ||
                    (showPasswordField && !!errors.password)
                  }
                >
                  {loading ? (
                    <>
                      <svg
                        className="animate-spin mr-2 h-4 w-4 inline-block"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        />
                      </svg>
                      Signing In...
                    </>
                  ) : (
                    "Sign In"
                  )}
                </Button>
              </div>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white px-4 text-gray-500 font-medium">
                    Or continue with
                  </span>
                </div>
              </div>

              {/* Google Sign In */}
              <Button
                variant="outline"
                type="button"
                className="w-full h-11 border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 rounded-lg font-semibold transition-all duration-200 transform hover:scale-[1.02]"
                disabled={loading}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={20}
                  height={20}
                  className="mr-2"
                >
                  <path
                    d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                    fill="currentColor"
                  />
                </svg>
                Continue with Google
              </Button>
            </fieldset>
          </form>

          {/* Terms and Privacy */}
          <div className="mt-6 text-center text-xs text-gray-500 leading-relaxed">
            By signing in, you agree to our{" "}
            <a
              href="#"
              className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
            >
              Privacy Policy
            </a>
            .
          </div>
        </div>
      </div>
    </div>
  );
}
