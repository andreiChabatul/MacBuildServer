import SectionOne from "./components/sectionOne/SectionOne";
import SectionThree from "./components/sectionThree/SectionThree";
import SectionTwo from "./components/sectionTwo/SectionTwo";

export default function HomePage() {

    return <main className="flex flex-col gap-8">
        <SectionOne />
        <SectionTwo />
        <SectionThree />
    </main>


}