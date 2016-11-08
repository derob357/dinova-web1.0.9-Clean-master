export interface IRestaurant {
    id: string;
    name: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    metroArea: string;
    phone: string;
    logoUrl: string;
    primaryCuisine: string;
    secondaryCuisine: Array<any>;
    restaurantStyles: Array<any>;
    lat: number;
    lon: number;
    price: string;
    facebookUrl: string;
    twitterUrl: string;
    pinterestUrl: string;
    reservationsUrl: string;
    websiteUrl: string;
    cateringType: string;
    cuisineCategory: string;
	dineNumber: string;
}