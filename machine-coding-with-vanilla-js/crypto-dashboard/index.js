class Layout {
  constructor() {
    this.cryptoData = [];

    this.root = document.getElementById("crypto__container");

    this.fetchCryptoData()
      .then((data) => {
        this.cryptoData = data;
        this.renderContent();
      })
      .catch((err) => {
        console.log({ err });
      });
  }

  async fetchCryptoData() {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false"
        );
        const data = await response.json();
        resolve(data);
      } catch (error) {
        reject(error);
      }
    });
  }

  renderContent() {
    this.cryptoData.forEach((crypto) => {
      const {
        image,
        name,
        symbol,
        current_price,
        market_cap_change_percentage_24h,
      } = crypto;

      const cryptoCard = document.createElement("div");
      cryptoCard.classList.add("crypto__card");

      const cryptoImage = document.createElement("div");
      cryptoImage.classList.add("crypto__image");

      const imageElement = document.createElement("img");
      imageElement.classList.add("img");
      imageElement.src = image;
      imageElement.alt = name;

      cryptoImage.appendChild(imageElement);

      const cryptoDetails = document.createElement("div");
      cryptoDetails.classList.add("crypto__details");

      // for first row start
      const cryptoDetailFirstRow = document.createElement("div");
      cryptoDetailFirstRow.classList.add("row");

      const cryptoName = document.createElement("span");
      cryptoName.classList.add("name");
      cryptoName.textContent = name;

      const cryptoPrice = document.createElement("span");
      cryptoPrice.classList.add("price");
      cryptoPrice.textContent = current_price;

      cryptoDetailFirstRow.appendChild(cryptoName);
      cryptoDetailFirstRow.appendChild(cryptoPrice);
      // for first row end

      // for second row start
      const cryptoDetailSecondRow = document.createElement("div");
      cryptoDetailSecondRow.classList.add("row");

      const cryptoSymbol = document.createElement("span");
      cryptoSymbol.classList.add("symbol");
      cryptoSymbol.textContent = symbol;

      const cryptoChange = document.createElement("span");
      cryptoChange.classList.add("change");
      cryptoChange.textContent = market_cap_change_percentage_24h;

      cryptoDetailSecondRow.appendChild(cryptoSymbol);
      cryptoDetailSecondRow.appendChild(cryptoChange);
      // for second row end

      cryptoDetails.appendChild(cryptoDetailFirstRow);
      cryptoDetails.appendChild(cryptoDetailSecondRow);

      cryptoCard.appendChild(cryptoImage);
      cryptoCard.appendChild(cryptoDetails);

      this.root.appendChild(cryptoCard);
    });
  }
}

new Layout();
