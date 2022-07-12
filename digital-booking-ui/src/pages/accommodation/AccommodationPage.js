import React, { useEffect } from "react";
import { useAccommodationStore } from "../../stores/accommodation";
import HeaderAccommodation from "../../components/accomodation/HeaderAccommodation";
import LocationSection from "../../components/accomodation/LocationSection";
import LikeAndShareSection from "../../components/accomodation/LikeAndShareSection";
import Gallery from "../../components/accomodation/Gallery";
import DescriptionSection from "../../components/accomodation/DescriptionSection";
import ServicesSection from "../../components/accomodation/ServicesSection";
import Rules from "../../components/accomodation/Rules";
import CalendarReservations from "../../components/accomodation/CalendarReservations";
import { useParams } from "react-router-dom";
import Map from "../../components/accomodation/Map";
import { Loading } from "../../components/Loading";
import { isEmptyObject } from "../../utils/validations";

const AccommodationPage = () => {
  const { id } = useParams();

  const accommodation = useAccommodationStore((s) => s.data);
  const loading = useAccommodationStore((s) => s.loading);
  const loaded = useAccommodationStore((s) => s.loaded);
  const error = useAccommodationStore((s) => s.error);
  const fetchData = useAccommodationStore((s) => s.fetchData);

  useEffect(() => {
    fetchData(id);
  }, []);

  if (error) return <h1>Upps</h1>;

  return (
    <>
      {isEmptyObject(accommodation) ? (
        <Loading />
      ) : (
        <>
          <HeaderAccommodation accommodation={accommodation} />
          <LocationSection accommodation={accommodation} />
          <LikeAndShareSection />
          <Gallery accommodation={accommodation} />
          <DescriptionSection accommodation={accommodation} />
          <ServicesSection accommodation={accommodation} />
          <Map
            latitude={accommodation.latitude}
            longitude={accommodation.longitude}
          />
          <Rules policies={accommodation.policies} />
          <CalendarReservations bookings={accommodation.bookings} />
        </>
      )}
    </>
  );
};

export default AccommodationPage;
