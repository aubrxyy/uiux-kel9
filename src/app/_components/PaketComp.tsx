import * as React from "react";

interface PackageCardProps {
  imgSrc: string;
  title: string;
  price: string;
}

const PackageCard: React.FC<PackageCardProps> = ({ imgSrc, title, price }) => (
  <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
    <img src={imgSrc} alt={title} className="grow w-full aspect-[1.09] max-md:mt-6" />
    <div className="flex gap-2.5 items-start max-md:mt-6">
      <div className="flex flex-col mt-2 text-2xl">
        <div className="text-black">{title}</div>
        <div className="mt-4 text-justify text-emerald-800 text-opacity-90">Harga {price}</div>
      </div>
      <div className="flex gap-4 px-px">
        <img src="/icon1.png" alt="icon" className="shrink-0 w-5 border-2 border-amber-300 border-solid aspect-square stroke-[2px] stroke-amber-300" />
        <img src="/icon2.png" alt="icon" className="shrink-0 w-5 border-2 border-amber-300 border-solid aspect-square stroke-[2px] stroke-amber-300" />
        <img src="/icon3.png" alt="icon" className="shrink-0 w-5 border-2 border-amber-300 border-solid aspect-square stroke-[2px] stroke-amber-300" />
      </div>
    </div>
  </div>
);

const PaketComp: React.FC = () => {
  return (
    <div className="flex flex-col items-center px-16 pt-12 pb-20 w-full bg-zinc-100 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col mb-16 w-full max-w-[1026px] max-md:mb-10 max-md:max-w-full">
        <div className="self-center text-4xl font-bold text-justify text-emerald-800 text-opacity-90">
          PILIHAN PAKET
        </div>
        <div className="mt-14 rounded-3xl max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <PackageCard imgSrc="https://cdn.builder.io/api/v1/img/assets/TEMP/e9482f66469b34e776b851c6e2c5bd3f6f26632bcfe40daeda68cdd6e34b8f88?apiKey=3a93785370534189b48289e04c179d34&" title="Paket Wisata Komplit" price="Rp200.000" />
            <PackageCard imgSrc="https://cdn.builder.io/api/v1/img/assets/TEMP/d0cd009e6ab42d98790c91f8fb0668705ab5cc4da52cac6f43142109498c1341?apiKey=3a93785370534189b48289e04c179d34&" title="Paket 1 Wisata" price="Rp200.000" />
            <PackageCard imgSrc="https://cdn.builder.io/api/v1/img/assets/TEMP/2a905aa185b68ec3c25a8def0939496479920c721c4690e49c4f2d844fe4f157?apiKey=3a93785370534189b48289e04c179d34&" title="Paket 1 Makan" price="Rp200.000" />
          </div>
        </div>
        <div className="mt-7 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <PackageCard imgSrc="https://cdn.builder.io/api/v1/img/assets/TEMP/e9482f66469b34e776b851c6e2c5bd3f6f26632bcfe40daeda68cdd6e34b8f88?apiKey=3a93785370534189b48289e04c179d34&" title="Paket Wisata Komplit" price="Rp200.000" />
            <div className="flex flex-col ml-5 w-[67%] max-md:ml-0 max-md:w-full">
              <div className="flex grow gap-5 justify-between items-start px-px mt-2 max-md:flex-wrap max-md:mt-7">
                <div className="flex flex-col self-stretch">
                  <div className="flex gap-5 w-full">
                    <div className="flex-auto text-2xl text-black">Paket 1 Wisata</div>
                    <div className="flex gap-4">
                      <img src="https://cdn.builder.io/api/v1/img/assets/TEMP/d262a3cca841232d62963a6f4bd164b00900e9f68b4fe280b01bfb171320c114?apiKey=3a93785370534189b48289e04c179d34&" alt="icon" className="shrink-0 w-5 border-2 border-amber-300 border-solid aspect-square stroke-[2px] stroke-amber-300" />
                      <img src="https://cdn.builder.io/api/v1/img/assets/TEMP/74c79857bd27c2c9ed01b58004b1f3dce77228fe5decb6fe9caa9dd6e991bd6b?apiKey=3a93785370534189b48289e04c179d34&" alt="icon" className="shrink-0 w-5 border-2 border-amber-300 border-solid aspect-square stroke-[2px] stroke-amber-300" />
                      <img src="https://cdn.builder.io/api/v1/img/assets/TEMP/9d544f68e282ae705a527856ce787c61174b7ec023a665d9318598c9f4568143?apiKey=3a93785370534189b48289e04c179d34&" alt="icon" className="shrink-0 w-5 border-2 border-amber-300 border-solid aspect-square stroke-[2px] stroke-amber-300" />
                    </div>
                  </div>
                  <div className="mt-5 text-2xl text-justify text-emerald-800 text-opacity-90">Harga Rp200.000</div>
                  <div className="justify-center self-center px-7 py-4 mt-12 text-3xl text-white whitespace-nowrap rounded-3xl bg-emerald-800 bg-opacity-90 max-md:px-5 max-md:mt-10">
                    Selengkapnya
                  </div>
                </div>
                <div className="flex flex-col text-2xl">
                  <div className="text-black">Paket 1 Makan</div>
                  <div className="mt-6 text-justify text-emerald-800 text-opacity-90">Harga Rp200.000</div>
                </div>
                <div className="flex gap-4">
                  <img src="https://cdn.builder.io/api/v1/img/assets/TEMP/d262a3cca841232d62963a6f4bd164b00900e9f68b4fe280b01bfb171320c114?apiKey=3a93785370534189b48289e04c179d34&" alt="icon" className="shrink-0 w-5 border-2 border-amber-300 border-solid aspect-square stroke-[2px] stroke-amber-300" />
                  <img src="https://cdn.builder.io/api/v1/img/assets/TEMP/9d544f68e282ae705a527856ce787c61174b7ec023a665d9318598c9f4568143?apiKey=3a93785370534189b48289e04c179d34&" alt="icon" className="shrink-0 w-5 border-2 border-amber-300 border-solid aspect-square stroke-[2px] stroke-amber-300" />
                  <img src="https://cdn.builder.io/api/v1/img/assets/TEMP/9d544f68e282ae705a527856ce787c61174b7ec023a665d9318598c9f4568143?apiKey=3a93785370534189b48289e04c179d34&" alt="icon" className="shrink-0 w-5 border-2 border-amber-300 border-solid aspect-square stroke-[2px] stroke-amber-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaketComp;