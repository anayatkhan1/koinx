import Image from "next/image";
const Team = () => {
    const teams = [
        {
            id: 1,
            name: "john Smith",
            img: "/male.png",
            role: " Designation here",
            about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
            id: 2,
            name: "Elina Williams",
            img: "/female.png",
            role: " Designation here",
            about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
            id: 3,
            name: "john Smith",
            img: "/male.png",
            role: " Designation here",
            about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
    ];
    return (
        <div className="mx-12 w-full max-w-5xl py-5 pb-10">
            <div className="rounded-lg bg-white p-5">
                <h1 className="text-2xl font-semibold">Team</h1>
                <p>
                    The standard chunk of Lorem Ipsum used since the 1500s is
                    reproduced below for those interested. Sections 1.10.32 and
                    1.10.33 from de Finibus Bonorum et Malorum by Cicero are
                    also reproduced in their exact original form, accompanied
                </p>

                <div className=" p-5">
                    <div className="grid w-full grid-cols-1 gap-3">
                        {teams.map(team => (
                            <div
                                className="flex gap-5 rounded-lg bg-blue-100 p-5"
                                key={team.id}
                            >
                                <div>
                                    <Image
                                        className="rounded-xl object-contain"
                                        src={team.img}
                                        alt="image-data"
                                        width={130}
                                        height={30}
                                    />
                                    <div className="text-sm font-bold">
                                        {team.name}
                                    </div>
                                    <p className="text-sm font-normal text-gray-600">
                                        {team.role}
                                    </p>
                                </div>
                                <div className="text-sm">{team.about}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;
