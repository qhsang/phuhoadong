export const MapSection = () => {
  return (
    <section className="py-12 px-4 bg-muted/30">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
          BẢN ĐỒ XÃ PHÚ HÒA ĐÔNG
        </h2>
        <div className="flex justify-center">
          <div className="relative max-w-4xl w-full">
            <img 
              src="/lovable-uploads/cd42123f-3008-4a5d-b1aa-a9e62a3b5e16.png"
              alt="Bản đồ xã Phú Hòa Đông, TP.HCM"
              className="w-full h-auto rounded-lg shadow-elevation"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent rounded-lg pointer-events-none"></div>
          </div>
        </div>
        <div className="text-center mt-6">
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Bản đồ hành chính xã Phú Hòa Đông với 57 ấp, thuộc thành phố Hồ Chí Minh. 
            Diện tích 59,751 km² với dân số 97,766 người.
          </p>
        </div>
      </div>
    </section>
  );
};