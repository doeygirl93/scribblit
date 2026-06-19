import { Great_Vibes } from "next/font/google";
import Image from 'next/image';

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
});


export default function Hero() {
    return (
        <section id="hero" className="h-[95vh] w-full bg-light-neutral mb-auto">

            <div className=" flex flex-col justify-start items-center ">
                <div className="mt-[17.5vh] mr-[10vw]">
                <h1 className={` ${greatVibes.className} text-dark-neutral ifont-great-vibes font-thin tracking-[2vw] text-[17.5vh] italic`}> S<span className="text-[15vh] tracking-[1.25vw]">cribblit</span></h1>
                </div>
                <p className="text-[2.5vh] italic font-mono text-accent-neutral/65"> You got that creative itch huh? </p>
                <button className=" border-dark-neutral border-2 bg-accent-primary m-2.5 py-1.25 px-2.5 rounded-full text-foreground shadow-lg shadow-dark-neutral/25 hover:scale-120 active:scale-90 transition-all duration-100 ease-in-out"> Login</button>
            </div>



            <div className=" flex flex-col items-end justify-end mr-[7.5vw] w-full h-full">
                <Image 
                src=""
                alt="orphues from the renansance era"
                className="w-full h-auto"
                />
            </div>

        </section>


    );
}