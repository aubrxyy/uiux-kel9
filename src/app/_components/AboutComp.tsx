import * as React from "react";

type ImageProps = {
  src: string;
  alt: string;
  className?: string;
};

type TextBlockProps = {
  title: string;
  content: string;
};

const Image: React.FC<ImageProps> = ({ src, alt, className }) => (
  <img loading="lazy" src={src} alt={alt} className={className} />
);

const TextBlock: React.FC<TextBlockProps> = ({ title, content }) => (
  <section className="flex flex-col mt-5 text-justify text-emerald-800 text-opacity-90 max-md:mt-10 max-md:max-w-full">
    <h2 className="text-3xl font-bold max-md:max-w-full">{title}</h2>
    <p className="mt-9 text-xl max-md:max-w-full">{content}</p>
  </section>
);

const AboutComp: React.FC = () => (
  <div className="flex justify-center items-center px-16 py-20 w-full bg-white max-md:px-5 max-md:max-w-full">
    <div className="flex flex-col mt-28 mb-16 w-full max-w-[1030px] max-md:my-10 max-md:max-w-full">
      <div className="max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <aside className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
            <figure className="flex overflow-hidden relative flex-col grow items-start pt-20 rounded-full aspect-[1.04] max-md:mt-9">
              <Image
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4723f5a0493b0cda46b04975af7f5e7ff17f1e5cf7e0290940f35355e60d2c87?apiKey=3a93785370534189b48289e04c179d34&"
                alt="Agro Edu Wisata Organik Mulyaharja"
                className="object-cover absolute inset-0 size-full"
              />
              <div className="relative z-10 shrink-0 mt-44 bg-amber-300 rounded-full h-[178px] w-[194px] max-md:mt-10"></div>
            </figure>
          </aside>
          <article className="flex flex-col ml-5 w-3/5 max-md:ml-0 max-md:w-full">
            <TextBlock
              title="Agro Edu Wisata Organik Mulyaharja"
              content="Agro Edu Wisata Organik Mulyaharja, atau yang dikenal sebagai Kampung Tematik Mulyaharja, merupakan salah satu desa wisata di Kota Bogor. Dibentuk oleh sekelompok penggerak wisata Kompepar Mulyaharja, desa ini memanfaatkan lahan pertanian yang ada untuk menjadi lokasi wisata edukasi yang berfokus pada pertanian organik. Temukan keindahan surga Kota Bogor dan nikmati kesejukan alam yang menenangkan di tengah kota."
            />
          </article>
        </div>
      </div>
      <button className="justify-center self-center px-7 py-4 text-3xl text-white whitespace-nowrap rounded-3xl bg-emerald-800 bg-opacity-90 max-md:px-5">
        Selengkapnya
      </button>
    </div>
  </div>
);

export default AboutComp;