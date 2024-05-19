import { Map } from "@/components/sections/Map";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { Section1 } from "@/components/sections/Section1";
import { Section2 } from "@/components/sections/Section2";

export default function Home() {
  return (
    <>
      <Section1 />
      <Section2 />
      <Map />
      <QuoteForm />
    </>
  );
}
