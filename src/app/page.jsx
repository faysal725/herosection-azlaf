import Image from "next/image";
import { BeakerIcon } from '@heroicons/react/24/solid'
import Minimenu from "./components/Minimenu";
import Mainmenu from "./components/Mainmenu";
import Herosection from "./components/Herosection";

export default function Home() {
  return (
    <main className="">
      <Minimenu />
      <Mainmenu />

      <Herosection />
    </main>
  );
}
