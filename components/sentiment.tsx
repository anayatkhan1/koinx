import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const Sentiment = () => {
    return (
        <div className="mx-12 w-full max-w-5xl">
            <div className="rounded-lg bg-white p-5">
                <h1 className="text-2xl font-semibold">Sentiment</h1>
                <div className="p-2 text-xl font-semibold">Key Events</div>
                <div className="flex gap-6">
                    <div className="rounded-lg bg-blue-100 p-2">
                        <h1 className="p-2 font-semibold">
                            Lorem ipsum dolor sit amet consectatur
                        </h1>
                        <div className="">
                            The standard chunk of Lorem Ipsum used since the
                            1500s is reproduced below for those interested.
                            Sections 1.10.32 and 1.10.33 from de Finibus Bonorum
                            et Malorum by Cicero are also reproduced in their
                            exact original form, accompanied by English versions
                            from the 1914 translation by H. Rackham. Where can I
                            get some? There are many variations of passages of
                            Lorem Ipsum available, but the majority
                        </div>
                    </div>
                    <div className="rounded-lg bg-green-100 p-2">
                        <h1 className="p-2 font-semibold">
                            Lorem ipsum dolor sit amet consectatur
                        </h1>
                        <div>
                            The standard chunk of Lorem Ipsum used since the
                            1500s is reproduced below for those interested.
                            Sections 1.10.32 and 1.10.33 from de Finibus Bonorum
                            et Malorum by Cicero are also reproduced in their
                            exact original form, accompanied by English versions
                            from the 1914 translation by H. Rackham. Where can I
                            get some? There are many variations of passages of
                            Lorem Ipsum available, but the majority
                        </div>
                    </div>
                </div>
                <div className="p-8">
                    <h1 className="pb-5 text-2xl font-semibold">
                        Analyst Estimates
                    </h1>
                    <div className="flex gap-5 ">
                        <div className="rounded-full bg-green-100 p-12 text-3xl">
                            76%
                        </div>
                        <div className="grid grid-cols-2 items-center gap-2">
                            <div>Buy</div>
                            <div className="mb-1 h-2 overflow-hidden rounded-lg bg-gray-200">
                                <div className="h-2 w-[100%] animate-pulse rounded-full bg-gradient-to-r from-green-500 to-blue-500"></div>
                            </div>
                            <div>Hold</div>
                            <div className="mb-1 h-2 overflow-hidden rounded-lg bg-gray-200">
                                <div className="h-2 w-[100%] animate-pulse rounded-full bg-gradient-to-r from-green-500 to-blue-500"></div>
                            </div>
                            <div>Sell</div>
                            <div className="mb-1 h-2 overflow-hidden rounded-lg bg-gray-200">
                                <div className="h-2 w-[100%] animate-pulse rounded-full bg-gradient-to-r from-green-500 to-blue-500"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sentiment;
