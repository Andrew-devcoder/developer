import xmlData from "./dbXml.xml";

const fetchXml = async (path) => {
    try {
        const response = await fetch(path);
        const xmlText = await response.text();
        return xmlText;
    } catch (error) {
        console.error("Error fetching local XML:", error);
        throw error;
    }
};

const parseXml = (xmlText) => {
    try {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, "application/xml");
        return xmlDoc;
    } catch (error) {
        console.error("Error parsing XML:", error);
        throw error;
    }
};

const processData = async () => {
    try {
        const localXmlPath = xmlData;
        const xmlText = await fetchXml(localXmlPath);
        const xmlDoc = parseXml(xmlText);
        const offers = xmlDoc.querySelector("offers");

        if (offers) {
            const offer = offers.querySelectorAll("offer");
            const dataOffer = [];

            offer.forEach((poduct) => {
                const vendor = poduct.querySelector("vendor").textContent;
                const country = poduct.querySelector("country").textContent;
                const price = poduct.querySelector("price").textContent;
                const name = poduct.querySelector("name").textContent;
                const picture = poduct.querySelector("picture").textContent;
                const vendorCode =
                    poduct.querySelector("vendorCode").textContent;

                dataOffer.push({
                    name: name,
                    brend: vendor,
                    country: country,
                    price: price,
                    img: picture,
                    vendorCode: vendorCode,
                });
            });

            return dataOffer;
        }
    } catch (error) {
        console.error(error);
        return [];
    }
};

export default processData;
