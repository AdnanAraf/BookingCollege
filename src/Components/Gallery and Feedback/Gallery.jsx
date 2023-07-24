import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const Gallery = () => {
  return (
    <div>
      <h1 className="text-[40px] text-center mt-[50px] font-semibold">
        College Gallery
      </h1>
      <div className="mt-[100px]">
        <Swiper
          spaceBetween={20}
          slidesPerView={5}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <img src="https://i.ibb.co/TYWxmHx/images-q-tbn-ANd9-Gc-Re6ef-R8-Bk-ILb-J0i-TBk1f8-Nnk24-G1-JXNGUUSw-usqp-CAU.jpg"></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/qDgPHDP/images-q-tbn-ANd9-Gc-Tzs-Z9vu4-PO7-T2-Ys-WYPEFEk-mw-IPLzxj-LFVWw-usqp-CAU.jpg"></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/BgxQVHv/images-q-tbn-ANd9-Gc-TO2-Bf-GV591c-Wc-KW41-i-Iq-NLMr-Ffht-Nd-HDf-YQ-usqp-CAU.jpg"></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5c83t6p64L96QaKbQdfigUfFtab3KqLImqA&usqp=CAU"></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/wBtSL0F/images-q-tbn-ANd9-Gc-SCCBu81s-C1-I3i-Mpg2-EDdi-C4a-Yl-OHXm1-PH3-EQ-usqp-CAU.jpg"></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/qJhwgyf/images-q-tbn-ANd9-Gc-Rmu-Ja5i-CPzrq-Cf-Je-Rcb-Ra-QLSfz2m-f-EDe5-A-usqp-CAU.jpg"></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/sKjKKVd/images-q-tbn-ANd9-Gc-R-s-TTE-ev-GHzk-GH-Ccquuf82n1-Hp-A7-Amdmf-A-usqp-CAU.jpg"></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/4mSqpQY/images-q-tbn-ANd9-Gc-QAK5a-Vclgn-ZU7f-W2eh-Ugp-QMe-XHQTApmz-Qt-Q-usqp-CAU.jpg"></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/2h7mJ8x/images-q-tbn-ANd9-Gc-Qy-Kk86g-RRh3-Fk8gb7-HCkvy-E2-Kfsps-Wcta-HVA-usqp-CAU.jpg"></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/ZHScCzg/images-q-tbn-ANd9-Gc-Tf-Rklk-GNLug-D-2-R-Brqz-Sq-BJCn-ROCf-A-0-a-Q-usqp-CAU.jpg"></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/cgMVCTR/images-q-tbn-ANd9-Gc-Q9f-VZ1-TLl-Qi-W8cie-GLHlv-Di-XWW27-slr8bpg-usqp-CAU.jpg"></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/MZNzQ1V/images-q-tbn-ANd9-Gc-TBSbg-Kzz-QT2cb-VRVDH9-ASTwzc-JHa-FLHdc-Vdw-usqp-CAU.jpg"></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/tCR4Yy5/images-q-tbn-ANd9-Gc-Tkv5-T3kp-Sf-NNedx-Ej-Ly98kr-Qe-C57-Ffvt-IZw-usqp-CAU.jpg"></img>
          </SwiperSlide>

          <SwiperSlide>
            <img src="https://i.ibb.co/cgMVCTR/images-q-tbn-ANd9-Gc-Q9f-VZ1-TLl-Qi-W8cie-GLHlv-Di-XWW27-slr8bpg-usqp-CAU.jpg"></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/MZNzQ1V/images-q-tbn-ANd9-Gc-TBSbg-Kzz-QT2cb-VRVDH9-ASTwzc-JHa-FLHdc-Vdw-usqp-CAU.jpg"></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/tCR4Yy5/images-q-tbn-ANd9-Gc-Tkv5-T3kp-Sf-NNedx-Ej-Ly98kr-Qe-C57-Ffvt-IZw-usqp-CAU.jpg"></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/qJhwgyf/images-q-tbn-ANd9-Gc-Rmu-Ja5i-CPzrq-Cf-Je-Rcb-Ra-QLSfz2m-f-EDe5-A-usqp-CAU.jpg"></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/sKjKKVd/images-q-tbn-ANd9-Gc-R-s-TTE-ev-GHzk-GH-Ccquuf82n1-Hp-A7-Amdmf-A-usqp-CAU.jpg"></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/4mSqpQY/images-q-tbn-ANd9-Gc-QAK5a-Vclgn-ZU7f-W2eh-Ugp-QMe-XHQTApmz-Qt-Q-usqp-CAU.jpg"></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/2h7mJ8x/images-q-tbn-ANd9-Gc-Qy-Kk86g-RRh3-Fk8gb7-HCkvy-E2-Kfsps-Wcta-HVA-usqp-CAU.jpg"></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/TYWxmHx/images-q-tbn-ANd9-Gc-Re6ef-R8-Bk-ILb-J0i-TBk1f8-Nnk24-G1-JXNGUUSw-usqp-CAU.jpg"></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/qDgPHDP/images-q-tbn-ANd9-Gc-Tzs-Z9vu4-PO7-T2-Ys-WYPEFEk-mw-IPLzxj-LFVWw-usqp-CAU.jpg"></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/BgxQVHv/images-q-tbn-ANd9-Gc-TO2-Bf-GV591c-Wc-KW41-i-Iq-NLMr-Ffht-Nd-HDf-YQ-usqp-CAU.jpg"></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5c83t6p64L96QaKbQdfigUfFtab3KqLImqA&usqp=CAU"></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/wBtSL0F/images-q-tbn-ANd9-Gc-SCCBu81s-C1-I3i-Mpg2-EDdi-C4a-Yl-OHXm1-PH3-EQ-usqp-CAU.jpg"></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/qJhwgyf/images-q-tbn-ANd9-Gc-Rmu-Ja5i-CPzrq-Cf-Je-Rcb-Ra-QLSfz2m-f-EDe5-A-usqp-CAU.jpg"></img>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Gallery;
