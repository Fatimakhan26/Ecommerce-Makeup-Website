import Blog from "./Blog/page";
import Category from "./components/Category";
import Feature from "./components/Feature";
import Hero from "./components/Hero";
import NewArrival from "./NewA/page";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <Hero/>
    <Feature/>
    <NewArrival/>
    <Category/>
    <Blog/>
   </div>
  );
}
