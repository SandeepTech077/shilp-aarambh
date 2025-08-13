import Image, { StaticImageData } from 'next/image';
interface HeaderSectionProps {
    logoTitle: StaticImageData;
    title: string;
}
const HeaderSection: React.FC<HeaderSectionProps> = ({ logoTitle, title }) => {
    return (
        <header className="text-center text-[#1D3A69]">
            {/* Logo Section */}
            <div className="mb-8">
                <div className="relative mx-auto h-10 w-120">
                    <Image 
                        src={logoTitle} 
                        alt="Vijay Diwas Logo"
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 200px, 300px"
                        priority
                    />
                </div>
            </div>

            {/* Title Section */}
            <div className="mb-12">
                <h1 className="text-[30px] lg:text-[40px] font-bold mb-8 leading-tight">
                    {title}
                </h1>
            </div>
        </header>
    );
};


export default HeaderSection;