import { useContext, useState, useEffect } from "react";
import { LocationsContext } from '../Contexts/LocationsContext';
import LocationsCard from './LocationsCard';
import AddLocationForm from './AddLocationForm';
import { UserAdminContext } from '../Contexts/UserAdminContext';
import InfiniteScroll from "react-infinite-scroll-component";

// Returns a container component that displays a list of locations.
const LocationsContainer = () => {
  const { locations, setLocations } = useContext(LocationsContext);
  const { userAdmin } = useContext(UserAdminContext);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const isUserAdmin = userAdmin && userAdmin.admin === 'true';

  useEffect(() => {
    fetch(`/locations?page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        setLocations(data);
      })
      .catch((error) => {
        console.error('Error fetching locations:', error);
      });
  }, [page, setLocations]);

  const viewMorePage = async () => {
    const nextPage = page + 1;
    const response = await fetch(`/locations?page=${nextPage}`);
    const data = await response.json();
    console.log("Locations API response:", data);
    if (data.length > 0) {
      setLocations((prevLocations) => [...prevLocations, ...data]);
      setPage(nextPage);
    } else {
      setHasMore(false); // No more data available
    }
  };
  
  return (
    <div className="locations-container">
      {isUserAdmin && <AddLocationForm />}
      <InfiniteScroll
        dataLength={locations.length}
        next={viewMorePage}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
      >
        {locations.map((location) => (
          <LocationsCard key={location.id} location={location} />
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default LocationsContainer;
