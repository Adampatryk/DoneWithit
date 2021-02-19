import client from "./client";

const endpoint = "/listings";

const getListings = async () => {
  const response = await client.get(endpoint);
  return response;
};

const addListing = (listing, onUploadProgress) => {
  const data = new FormData();

  data.append("title", listing.title);
  data.append("description", listing.description);
  data.append("price", listing.price);
  data.append("categoryId", listing.category.value);

  listing.images.forEach((image, index) => {
    data.append("images", {
      name: "image" + index,
      type: "image/jpg",
      uri: image,
    });
  });

  if (listing.location) {
    data.append(
      "location",
      JSON.stringify({
        latitude: listing.location.coords.latitude,
        longitude: listing.location.coords.longitude,
      })
    );
  }

  return client.post(endpoint, data, {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
  });
};

export default {
  getListings,
  addListing,
};
