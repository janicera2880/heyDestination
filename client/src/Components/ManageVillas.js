import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserAdminContext } from "../Contexts/UserAdminContext";
import { VillasContext } from "../Contexts/VillasContext";
import UpdateVilla from "./UpdateVilla";
import { LocationsContext } from "../Contexts/LocationsContext";


// Functional component that manages the state and functionality related to managing villas.
function ManageVillas() {
    const { userAdmin } = useContext(UserAdminContext);
    const { userAdminVillas, setUserAdminVillas } = useContext(VillasContext);
    const { locations, setLocations } = useContext(LocationsContext);

    function handleDeleteVilla(deletedVilla) {
      // Delete the villa by sending a DELETE request to the server
      fetch(`/user_admins/${userAdmin.id}/villas/${deletedVilla.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(deletedVilla),
      })
        .then(() => {
          // Update the state by removing the deleted villa from userAdminVillas and locations
          const newVillaArray = userAdminVillas.filter(
            (villa) => villa.id !== deletedVilla.id
          );
          const updatedLocationArray = locations.map((location) => {
            if (location.id === deletedVilla.location_id) {
              return {
                ...location,
                villas: location.villas.filter(
                  (villa) => villa.id !== deletedVilla.id
                ),
              };
            } else {
              return location;
            }
          });
          setUserAdminVillas(newVillaArray);
          setLocations(updatedLocationArray);
        })
        .catch((error) => {
          console.error("Error deleting villa:", error);
        });
    }

      function handleUpdate(updatedVilla, villaID) {
        // Update the villa by sending a PATCH request to the server
        fetch(`/user_admins/${userAdmin.id}/villas/${villaID}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedVilla),
        })
        .then((r) => r.json())
        .then((updatedVilla) => {
          if (locations) { // Check if locations is not null
            const updatedLocationArray = locations.map((location) => {
              if (location.id === updatedVilla.location_id) {
                return {
                  ...location,
                  villas: location.villas.map((villa) => {
                    if (villa.id === updatedVilla.id) {
                      return updatedVilla;
                    } else {
                      return villa;
                    }
                  }),
                };
              } else {
                return location;
              }
            });
            const updatedVillaArray = userAdminVillas.map((villa) => {
              if (villa.id === updatedVilla.id) {
                return updatedVilla;
              } else {
                return villa;
              }
            });
            setLocations(updatedLocationArray);
            setUserAdminVillas(updatedVillaArray);
          }
        });
    }
// Function to render the post components
    const villaContent = () => {
        if (!Array.isArray(userAdminVillas) || userAdminVillas.length < 1) {
      return <span>No Villa Available!</span>;
        }
        return userAdminVillas.map((villa) => {
      // Function to handle the delete button click
    function handleDeleteClick() {
        handleDeleteVilla(villa);
      }

      // Function to handle the update form submission
      function handleUpdateForm(newVilla) {
        handleUpdate(newVilla, villa.id);
      }

        // Render the villa with the update form and delete button
            return (
                
                <div className='villas-edit'key={villa.id}>
          <Link className="some-button" to={"/user_admin"}> Go Back To Admin Portal</Link>
                    <br />
                    <br />
                    <br />
                    <br />
                    <h3>{villa.name}</h3>
                    <br />
                    <img src={villa.image1} width="400" height="300" alt="Villa" />
                    <br />
                    <h4>{villa.rate} Rate Per Night</h4>
                    <h5>{villa.services}</h5>
                    <br />
                    <UpdateVilla handleUpdateForm={handleUpdateForm} />
                    <br />
                    <button className="some-button" onClick={handleDeleteClick}>Delete 🗑</button>
                    <br />
                    <br />
                </div>
            );
        });
    };
    
    return(
        <div className="villa-component">
    
          {villaContent()}
          
         
            
        </div>
    );
}

        

export default ManageVillas;