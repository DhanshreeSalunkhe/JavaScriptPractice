const productData = {
  id: "1",
  name: "Men Navy Blue Solid Sweatshirt",
  preview:
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
  photos: [
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg",
  ],
  description:
    "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
  size: [1, 1, 0, 1, 0],
  isAccessory: false,
  brand: "United Colors of Benetton",
  price: 2599,
};

$(() => {
  createList();
});

const createList = () => {
  const product_page = getProductDetails(productData);

  const product = $(".product");
  product.append(product_page);
};

const getProductDetails = (productData) => {
  const { name, price, brand, description, preview, photos } =
    productData || {};
  document.title = name;
  $("#title").html(name);
  $("#brand").html(brand);
  $("#preview").attr("src", preview);
  $("#description").html(description);
  $("#price").html(price);

  if (Array.isArray(photos)) {
    photos.forEach((photo, index) => {
      const photoEl = $(`
			<div class="product-preview-photo">
				<img src=${photo} alt=${name}/>
			</div>
			`);
      if (index === 0) {
        photoEl.addClass("privew-active");
      }
      $(".product-privews").append(photoEl);
      onPhotoClick(photoEl, photo);
    });
  }
};

const onPhotoClick = (photoEl, photo) => {
  photoEl.click(function (e) {
    $("#preview").attr("src", photo);
    const currActive = $(".product-preview-photo.privew-active");
    currActive.removeClass("privew-active");
    $(this).addClass("privew-active");
  });
};
