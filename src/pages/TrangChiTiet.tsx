import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Phone, MapPin, Users } from "lucide-react";
import { coQuan } from "@/data/coQuan";

const TrangChiTiet = () => {
  const { id } = useParams();
  const organId = parseInt(id || "0");
  const organ = coQuan.find(cq => cq.id === organId);

  if (!organ) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Không tìm thấy thông tin</h1>
          <Link to="/">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Trở về trang chủ
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/20">
      {/* Header */}
      <div className="bg-gradient-hero text-primary-foreground py-8 px-4">
        <div className="container mx-auto">
          <Link to="/">
            <Button variant="secondary" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Trở về trang chủ
            </Button>
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            {organ.tieuDe}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto py-8 px-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Thông tin liên hệ */}
          <div className="lg:col-span-1">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Thông tin liên hệ
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 mt-1 text-muted-foreground flex-shrink-0" />
                    <div>
                      <div className="font-medium text-sm">Địa chỉ:</div>
                      <div className="text-sm text-muted-foreground">{organ.diaChi}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <div className="font-medium text-sm">Điện thoại:</div>
                      <div className="text-sm font-mono">{organ.soDienThoai}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Danh sách nhân sự */}
          <div className="lg:col-span-2">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Danh sách nhân sự ({organ.nhanSu.length} người)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {organ.nhanSu.map((person, index) => (
                    <div 
                      key={index}
                      className="flex items-center justify-between p-4 bg-gradient-card rounded-lg border hover:shadow-card transition-all duration-200"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <Users className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{person.hoTen}</h3>
                          <Badge variant="secondary" className="mt-1">
                            {person.chucVu}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrangChiTiet;