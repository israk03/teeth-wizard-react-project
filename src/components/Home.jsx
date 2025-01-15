import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import ServiceCard from "../ServiceCard/ServiceCard";

export default function Home() {
  const services = useLoaderData();
  console.log(services);
  return (
    <div>
      <Banner></Banner>
      <div>
        {services.map((service) => (
          <ServiceCard service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
}
