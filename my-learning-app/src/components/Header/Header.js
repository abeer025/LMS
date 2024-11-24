import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { auth, signOut } from "../../../auth";
import { Button } from "../ui/button";
import { FaBookOpen } from "react-icons/fa6";


export default async function Header() {
  const session = await auth();
  console.log('session in header=>', session)
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <FaBookOpen />
              <span className="ml-3 text-xl font-semibold text-gray-900">
                LMS
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:flex-grow">
            <Tabs defaultValue="home" className="flex justify-center w-full">
              <TabsList className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground">
                <Link href="/" passHref>
                  <TabsTrigger value="home">Home</TabsTrigger>
                </Link>
                <Link href="/about" passHref>
                  <TabsTrigger value="about">About Us</TabsTrigger>
                </Link>
                <Link href="/contact" passHref>
                  <TabsTrigger value="contact">Contact Us</TabsTrigger>
                </Link>
              </TabsList>
            </Tabs>
          </div>

          {/* Login/Signout Section */}
          <div className="hidden md:flex items-center">
            {session ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-700">
                  {session.user.email}
                </span>
                <form
                  action={async () => {
                    "use server";
                    await signOut();
                  }}
                >
                  <Button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
                  >
                    Sign out
                  </Button>
                </form>
              </div>
            ) : (
              <Link
                href="/signin"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col space-y-4">
                  <Link href="/">Home</Link>
                  <Link href="/about">About Us</Link>
                  <Link href="/contact">Contact Us</Link>
                  {session ? (
                    <>
                      <span className="text-sm text-gray-700">
                        {session.user.email}
                      </span>
                      <form
                        action={async () => {
                          "use server";
                          await signOut();
                        }}
                      >
                        <Button
                          type="submit"
                          variant="outline"
                          className="w-full"
                        >
                          Sign out
                        </Button>
                      </form>
                    </>
                  ) : (
                    <Link href="/signin">
                      <Button variant="outline" className="w-full">
                        Login
                      </Button>
                    </Link>
                  )}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
