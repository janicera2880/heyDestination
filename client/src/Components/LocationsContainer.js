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
    fetch(`/locations?page=1`)
      .then((r) => r.json())
      .then((data) => {
        setLocations(data);
      })
      .catch((error) => {
        console.error('Error fetching locations:', error);
      });
  }, [setLocations]);

  const viewMorePage = async () => {
    const response = await fetch(`/locations?page=${page + 1}`);
    const data = await response.json();
    console.log("Locations API response:", data);
    if (data.length > 0) {
      setLocations((prevLocations) => [...prevLocations, ...data]);
      setPage((prevPage) => prevPage + 1);
    } else {
      setHasMore(false); // No more data available
    }
  };
  
  return (
    <div>
      {isUserAdmin && <AddLocationForm />}
      <InfiniteScroll
        dataLength={locations.length || 0}
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
