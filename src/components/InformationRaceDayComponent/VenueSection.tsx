import Image, { StaticImageData } from "next/image";

interface VenueDetails {
  title: string;
  address: string;
  qrImage: StaticImageData;
  mapImage: StaticImageData;
}

interface ParkingVenueDetails {
  title: string;
  parkingArea: string;
  parkingAreaMap: StaticImageData;
  parkingQr: StaticImageData;
}

interface Props {
  venue: VenueDetails;
  parkingVenue: ParkingVenueDetails;
}

const VenueSection = ({ venue, parkingVenue }: Props) => {
  return (
    <div className="space-y-10 text-[#1D3A69]">
      {/* Venue Section */}
      <section className="flex flex-col md:flex-row gap-6 items-start">
        <div className="w-full md:w-[30%] space-y-3">
          <h2 className="text-[26px] lg:text-[40px] font-bold">{venue.title}</h2>
          <p className="text-[14px] lg:text-[16px]">{venue.address}</p>
          <Image
            src={venue.qrImage}
            alt="Venue QR Code"
            className="w-full h-auto"
          />
        </div>

        {/* Right: 70% */}
        <div className="w-full md:w-[70%]">
          <Image
            src={venue.mapImage}
            alt="Venue Map"
            className="w-full h-auto "
          />
        </div>
      </section>

      {/* Parking Section */}
      <section className="flex flex-col md:flex-row-reverse gap-6 items-start text-right ">
        {/* Right (content): 30% */}
        <div className="w-full md:w-[30%] space-y-3">
          <h2 className="text-[26px] lg:text-[40px] font-bold ">{parkingVenue.title}</h2>
          <p className="text-[14px] lg:text-[16px]">{parkingVenue.parkingArea}</p>
          <Image
            src={parkingVenue.parkingQr}
            alt="Parking QR Code"
            className="w-full h-auto"
          />
        </div>

        {/* Left (map): 70% */}
        <div className="w-full md:w-[70%]">
          <Image
            src={parkingVenue.parkingAreaMap}
            alt="Parking Area Map"
            className="w-full h-auto"
          />
        </div>
      </section>
    </div>
  );
};

export default VenueSection;
