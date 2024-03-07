import { useEffect } from "react";
import SectionOne from "./components/sectionOne/SectionOne";
import SectionThree from "./components/sectionThree/SectionThree";
import SectionTwo from "./components/sectionTwo/SectionTwo";
import UserService from "../(User)/user.service";

export default function HomePage() {

   useEffect(()=> UserService.sendRequest(), [])

    return <main className="flex flex-col gap-8">
        <SectionOne />
        <SectionTwo />
        <SectionThree />
    </main>

}