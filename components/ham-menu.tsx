import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link } from "next-view-transitions";

export default function HamMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="hover:bg-muted transition-all duration-300 hover:scale-105 h-full p-5 cursor-pointer">
          <Menu />
        </div>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle className="text-4xl mt-5">Go Bananas</SheetTitle>
          <SheetDescription className="text-xl font-mono">
            API Tester
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col justify-center items-center mt-36 text-center">
          <Link href={"/"} className="w-full">
            <div className="w-full hover:bg-muted transition-all duration-300 hover:scale-105 h-full p-5 cursor-pointer">
              Home
            </div>
          </Link>

          <Link href={"/dog-gallery"} className="w-full">
            <div className="w-full hover:bg-muted transition-all duration-300 hover:scale-105 h-full p-5 cursor-pointer">
              Dog Gallery
            </div>
          </Link>

          <Link href={"/weather"} className="w-full">
            <div className="w-full hover:bg-muted transition-all duration-300 hover:scale-105 h-full p-5 cursor-pointer">
              Weather
            </div>
          </Link>

          <Link href={"/json-placeholder"} className="w-full">
            <div className="w-full hover:bg-muted transition-all duration-300 hover:scale-105 h-full p-5 cursor-pointer">
              JSON
            </div>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
