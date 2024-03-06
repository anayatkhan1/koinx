import Image from "next/image";
import { Button } from "./ui/button";
const About = () => {
    return (
        <div className="mx-12 w-full max-w-5xl py-6">
            <div className="rounded-lg bg-white p-5">
                <div className="border-b-2 p-3">
                    <h1 className="text-2xl font-semibold">About Bitcoin</h1>
                    <p className="mt-3">
                        Bitcoin (BTC) is a cryptocurrency, a virtual currency
                        designed to act as money and a form of payment outside
                        the control of any one person, group, or entity, thus
                        removing the need for third-party involvement in
                        financial transactions.Bitcoin (BTC) is a
                        cryptocurrency, a virtual currency designed to act as
                        money and a form of payment outside the control of any
                        one person, group, or entity, thus removing the need for
                        third-party involvement in financial transactions.
                    </p>
                </div>
                <div className="p-3">
                    <h1 className="mb-3 text-2xl font-semibold">
                        Lorem ipsum dolor sit amet
                    </h1>
                    <div className="space-y-4 border-b-2">
                        <p>
                            Bitcoin (BTC) is a cryptocurrency, a virtual
                            currency designed to act as money and a form of
                            payment outside the control of any one person,
                            group, or entity, thus removing the need for
                            third-party involvement in financial
                            transactions.Bitcoin (BTC) is a cryptocurrency, a
                            virtual currency designed to act as money and a form
                            of payment outside the control of any one person,
                            group, or entity, thus removing the need for
                            third-party involvement in financial transactions.
                        </p>
                        <p>
                            Bitcoin (BTC) is a cryptocurrency, a virtual
                            currency designed to act as money and a form of
                            payment outside the control of any one person,
                            group, or entity, thus removing the need for
                            third-party involvement in financial
                            transactions.Bitcoin (BTC) is a cryptocurrency, a
                            virtual currency designed to act as money and a form
                            of payment outside the control of any one person,
                            group, or entity, thus removing the need for
                            third-party involvement in financial transactions.
                        </p>
                        <p>
                            Bitcoin (BTC) is a cryptocurrency, a virtual
                            currency designed to act as money and a form of
                            payment outside the control of any one person,
                            group, or entity, thus removing the need for
                            third-party involvement in financial
                            transactions.Bitcoin (BTC) is a cryptocurrency, a
                            virtual currency designed to act as money and a form
                            of payment outside the control of any one person,
                            group, or entity, thus removing the need for
                            third-party involvement in financial transactions.
                        </p>
                    </div>
                </div>
                <div className="">
                    <h1 className="p-4 text-2xl font-semibold">
                        Already Holding Bitcoin?
                    </h1>
                    <div className="flex justify-between gap-7 border-b-2 pb-5">
                        <div className="w-full rounded-lg bg-green-100 p-5">
                            <div className="grid grid-cols-2 gap-4">
                                <Image
                                    src="/trade.png"
                                    alt="trade"
                                    width={200}
                                    height={200}
                                    className="h-full rounded-lg"
                                />
                                <div className="space-y-3 p-2">
                                    <h1 className="text-xl font-bold ">
                                        Calculator your Profits
                                    </h1>{" "}
                                    <Button variant="secondary">
                                        Check Now
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="w-full rounded-lg bg-orange-100 p-5">
                            <div className="grid grid-cols-2 gap-4">
                                <Image
                                    src="/trade.png"
                                    alt="trade"
                                    width={200}
                                    height={200}
                                    className="h-full rounded-lg"
                                />
                                <div className="space-y-3 p-2">
                                    <h1 className="text-xl font-bold ">
                                        Calculator your tax liability
                                    </h1>{" "}
                                    <Button variant="secondary">
                                        Check Now
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="py-5">
                        <p>
                            Bitcoin (BTC) is a cryptocurrency, a virtual
                            currency designed to act as money and a form of
                            payment outside the control of any one person,
                            group, or entity, thus removing the need for
                            third-party involvement in financial
                            transactions.Bitcoin (BTC) is a cryptocurrency, a
                            virtual currency designed to act as money and a form
                            of payment outside the control of any one person,
                            group, or entity, thus removing the need for
                            third-party involvement in financial transactions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
