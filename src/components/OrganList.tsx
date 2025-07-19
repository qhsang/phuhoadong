import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Phone, MapPin, ArrowRight, Building2, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { coQuan } from "@/data/coQuan";

export const OrganList = () => {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
          CÁC CỔ QUAN HÀNH CHÍNH
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {coQuan.map((organ) => (
            <HoverCard key={organ.id}>
              <HoverCardTrigger asChild>
                <Card className="hover:shadow-elevation transition-all duration-300 border-2 hover:border-primary/20 cursor-pointer h-full flex flex-col">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Building2 className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg text-primary leading-tight">
                          {organ.tieuDe}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-start gap-2 text-sm">
                        <MapPin className="w-4 h-4 mt-0.5 text-muted-foreground flex-shrink-0" />
                        <span className="text-muted-foreground">{organ.diaChi}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Phone className="w-4 h-4 text-muted-foreground" />
                        <span className="font-mono text-foreground">{organ.soDienThoai}</span>
                      </div>
                    </div>
                    <div className="mt-auto pt-4">
                      <Link to={`/chi-tiet/${organ.id}`}>
                        <Button className="w-full group">
                          Xem chi tiết
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </HoverCardTrigger>
              <HoverCardContent className="w-80 z-50 bg-card border shadow-elevation" side="top">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-primary" />
                    <h4 className="font-semibold text-sm leading-tight">{organ.tieuDe}</h4>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 mt-0.5 text-muted-foreground flex-shrink-0" />
                      <span className="text-muted-foreground">{organ.diaChi}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      <span className="font-mono">{organ.soDienThoai}</span>
                    </div>
                  </div>

                  <div className="border-t pt-3">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-4 h-4 text-primary" />
                      <span className="font-medium text-sm">Nhân sự chủ chốt:</span>
                    </div>
                    <div className="space-y-1">
                      {organ.nhanSu.slice(0, 3).map((person, index) => (
                        <div key={index} className="flex justify-between text-xs">
                          <span className="text-muted-foreground">{person.chucVu}:</span>
                          <span className="font-medium">{person.hoTen}</span>
                        </div>
                      ))}
                      {organ.nhanSu.length > 3 && (
                        <div className="text-xs text-muted-foreground mt-1">
                          ... và {organ.nhanSu.length - 3} nhân sự khác
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="border-t pt-2">
                    <p className="text-xs text-muted-foreground text-center">
                      Hover để xem thông tin nhanh • Click "Xem chi tiết" để xem đầy đủ
                    </p>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </div>
    </section>
  );
};