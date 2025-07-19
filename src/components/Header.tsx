import { Flag } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-gradient-hero text-primary-foreground py-8 px-4">
      <div className="container mx-auto text-center">
        <div className="flex justify-center items-center gap-4 mb-4">
          <Flag className="w-12 h-12" />
          <div>
            <h1 className="text-4xl md:text-6xl font-bold">
              XÃ PHÚ HÒA ĐÔNG
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              THÀNH PHỐ HỒ CHÍ MINH
            </p>
          </div>
          <Flag className="w-12 h-12" />
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 max-w-2xl mx-auto">
          <p className="text-lg md:text-xl">
            "Đoàn kết - Dân chủ - Kỷ cương - Sáng tạo - Phát triển"
          </p>
        </div>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
            <div className="text-2xl font-bold">59,751</div>
            <div className="text-sm opacity-90">km²</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
            <div className="text-2xl font-bold">97,766</div>
            <div className="text-sm opacity-90">người</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
            <div className="text-2xl font-bold">57</div>
            <div className="text-sm opacity-90">ấp</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
            <div className="text-2xl font-bold">16</div>
            <div className="text-sm opacity-90">trường học</div>
          </div>
        </div>
      </div>
    </header>
  );
};