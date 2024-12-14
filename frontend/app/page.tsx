import TourCard from "@/components/TourCard";

export default function Home() {
  return (
    <div>
      <TourCard
        title="Tropical Paradise Gateway Not"
        description="My name is Mohit Singh. I'm pursuing B.Tech. from Maharaja Surajmal Institute of Technolgy"
        price="345"
        image="/superman.jpg"
      />
      <TourCard
        title="Mohit Singh"
        description="My name is Mohit Singh. I'm pursuing B.Tech. from Maharaja Surajmal Institute of Technolgy"
        price="345"
        image="/ironman.jpg"
      />
      <TourCard
        title="Mohit Singh"
        description="My name is Mohit Singh. I'm pursuing B.Tech. from Maharaja Surajmal Institute of Technolgy"
        price="345"
        image="/gokuVegita.jpg"
      />
      <TourCard
        title="Mohit Singh"
        description="My name is Mohit Singh. I'm pursuing B.Tech. from Maharaja Surajmal Institute of Technolgy"
        price="345"
        image="/deadpool.jpg"
      />
    </div>
  );
}
