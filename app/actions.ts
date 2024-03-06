export async function getData() {
    const BaseUrl = "https://api.coingecko.com/api/v3/simple/price";
    const res = await fetch(
        `${BaseUrl}?ids=bitcoin&vs_currencies=inr%2Cusd&include_market_cap=true`
    );

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
}

export async function getTrending() {
    const BaseUrl = "https://api.coingecko.com/api/v3/search/trending";
    const res = await fetch(BaseUrl);

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
}
