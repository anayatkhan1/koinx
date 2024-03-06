import { getTrending } from "@/app/actions";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
const Coins = async () => {
    const trends = await getTrending();
    const coins = trends.coins.slice(1, 4);
    console.log(coins[0].item.data);
    return (
        <div className="w-full bg-white py-10">
            <div className="gap-6 p-10">
                <h1 className="text-2xl font-bold">Trending Coins</h1>

                <div className="max-w-xl p-5">
                    <Carousel
                        className="w-full max-w-xs"
                        opts={{
                            align: "start",
                        }}
                    >
                        <CarouselContent>
                            {Array.from({ length: 3 }).map((_, index) => (
                                <CarouselItem key={index} className="">
                                    <div className="p-1">
                                        <Card>
                                            <CardContent className="flex  items-start justify-start p-6">
                                                <div>
                                                    <div className="flex items-center gap-3 font-semibold">
                                                        <Image
                                                            className="rounded-full"
                                                            src={
                                                                coins[index]
                                                                    .item.small
                                                            }
                                                            alt="coins"
                                                            height={45}
                                                            width={45}
                                                        />
                                                        <div>
                                                            {
                                                                coins[index]
                                                                    .item.symbol
                                                            }
                                                        </div>
                                                    </div>
                                                    <div>
                                                        {
                                                            coins[index].item
                                                                .price_btc
                                                        }
                                                    </div>
                                                    <Image
                                                        src={
                                                            coins[index].item
                                                                .data.sparkline
                                                        }
                                                        alt="graph"
                                                        width={75}
                                                        height={75}
                                                    />
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default Coins;
