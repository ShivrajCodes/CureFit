import React, { useEffect, useRef } from "react";

const Hospitals2 = () => {
  const mapRef = useRef(null);
  const inputRef = useRef(null);
  let map,
    searchBox,
    markers = [];

  useEffect(() => {
    const loadMap = () => {
      map = new window.google.maps.Map(mapRef.current, {
        center: { lat: -33.8688, lng: 151.2195 },
        zoom: 13,
      });

      const input = inputRef.current;
      searchBox = new window.google.maps.places.SearchBox(input);

      map.addListener("bounds_changed", () => {
        searchBox.setBounds(map.getBounds());
      });

      searchBox.addListener("places_changed", () => {
        const places = searchBox.getPlaces();

        if (places.length === 0) {
          return;
        }

        markers.forEach((marker) => marker.setMap(null));
        markers = [];

        const bounds = new window.google.maps.LatLngBounds();
        places.forEach((place) => {
          if (!place.geometry || !place.geometry.location) {
            console.log("Returned place contains no geometry");
            return;
          }

          const icon = {
            url: place.icon,
            size: new window.google.maps.Size(71, 71),
            origin: new window.google.maps.Point(0, 0),
            anchor: new window.google.maps.Point(17, 34),
            scaledSize: new window.google.maps.Size(25, 25),
          };

          const marker = new window.google.maps.Marker({
            map,
            icon,
            title: place.name,
            position: place.geometry.location,
          });

          const infoWindow = new window.google.maps.InfoWindow({
            content: `<div><strong>${place.name}</strong><br>${place.formatted_address}</div>`,
          });

          marker.addListener("click", () => {
            infoWindow.open(map, marker);
          });

          markers.push(marker);

          if (place.geometry.viewport) {
            bounds.union(place.geometry.viewport);
          } else {
            bounds.extend(place.geometry.location);
          }
        });

        map.fitBounds(bounds);

        const service = new window.google.maps.places.PlacesService(map);
        const request = {
          location: places[0].geometry.location,
          radius: "1500",
          type: ["hospital"],
        };

        service.nearbySearch(request, (results, status) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            results.forEach((result) => {
              const marker = new window.google.maps.Marker({
                map,
                title: result.name,
                position: result.geometry.location,
              });

              service.getDetails({ placeId: result.place_id }, (place, status) => {
                if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                  const infoWindow = new window.google.maps.InfoWindow({
                    content: `
                      <div>
                        <strong>${place.name}</strong><br>
                        ${place.vicinity}<br>
                        <strong>Phone:</strong> ${place.formatted_phone_number || "N/A"}<br>
                        <strong>Rating:</strong> ${place.rating || "N/A"}<br>
                        <strong>User Ratings:</strong> ${place.user_ratings_total || "N/A"}
                      </div>
                    `,
                  });

                  marker.addListener("click", () => {
                    infoWindow.open(map, marker);
                  });

                  markers.push(marker);
                }
              });
            });
          }
        });
      });
    };

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCubocZsfnSUBt2Hq_zExbfrK7mch18KGw&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = loadMap;
    document.head.appendChild(script);

    return () => {
      markers.forEach((marker) => marker.setMap(null));
    };
  }, []);

  return (
    <div>
      <div className="px-4 pt-20 pb-4 relative ">
        <input
          ref={inputRef}
          id="pac-input"
          className="controls"
          type="text"
          placeholder="Enter a location"
          style={{
            width: "300px",
            padding: "0.25rem 1rem",
            paddingLeft: "20px",
            backgroundColor: "#E7DEF0",
            fontWeight: "500",
            borderRadius: "9999px",
            backgroundImage:
              'url("https://cdn-icons-png.flaticon.com/512/149/149852.png")',
            backgroundSize: "20px 20px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "calc(100% - 10px) center",
          }}
        />
      </div>
      <div
        ref={mapRef}
        id="map"
        style={{ height: "100svh", width: "100%" }}
      ></div>
    </div>
  );
};

export default Hospitals2;
