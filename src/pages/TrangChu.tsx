import { Header } from "@/components/Header";
import { MapSection } from "@/components/MapSection";
import { OrganList } from "@/components/OrganList";

const TrangChu = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <MapSection />
      <OrganList />
    </div>
  );
};

export default TrangChu;