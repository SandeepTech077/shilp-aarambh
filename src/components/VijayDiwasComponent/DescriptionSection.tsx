import Link from 'next/link';

interface DescriptionSectionProps {
    describation: string[];
    btnText: string;
    onRegisterClick?: () => void;
}

export const DescriptionSection: React.FC<DescriptionSectionProps> = ({
    describation,
    btnText,
  
}) => {
    return (
        <section className=" mx-auto text-[#1D3A69] py-6 text-center">
            {describation.map((paragraph: string, index: number) => (
                <p
                    key={index}
                    className="text-[14px] lg:text-[16x] font-medium my-6"
                >
                    {paragraph}
                </p>
            ))}

            {/* Register Button */}
            <div className="text-center mt-10">
                
                    <Link href="/register" passHref>
                        <button
                            className="py-4 px-10 bg-[#1D3A69] text-white text-[20px]"
                            type="button"
                            aria-label="Register for Vijay Diwas Run"
                        >
                            <span className="relative z-10">{btnText}</span>
                        </button>
                    </Link>
                
            </div>
        </section>
    );
};
