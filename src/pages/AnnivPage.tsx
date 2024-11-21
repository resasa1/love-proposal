import AudioPlayer from "@/components/Audio";
import MouseImageTrail from "@/components/MouseImageTrail";
// import { useEffect } from "react"
// import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HeartSpinner } from "react-spinners-kit";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"




const AnnivPage = () => {
    const navigate = useNavigate()
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const date = new Date();
    const now = date.toLocaleDateString()

    const imageUrls = [
        'https://i.pinimg.com/736x/3b/4f/f9/3b4ff97afcf6e6d44f4414dd6ea19034.jpg',
        'https://i.pinimg.com/736x/3b/4f/f9/3b4ff97afcf6e6d44f4414dd6ea19034.jpg',
        'https://i.pinimg.com/736x/3b/4f/f9/3b4ff97afcf6e6d44f4414dd6ea19034.jpg',
        'https://i.pinimg.com/736x/3b/4f/f9/3b4ff97afcf6e6d44f4414dd6ea19034.jpg',
        //2
        'https://i.pinimg.com/736x/de/1a/c4/de1ac4b99e5496a1dd5ef959a7a69c64.jpg',
        'https://i.pinimg.com/736x/de/1a/c4/de1ac4b99e5496a1dd5ef959a7a69c64.jpg',
        'https://i.pinimg.com/736x/de/1a/c4/de1ac4b99e5496a1dd5ef959a7a69c64.jpg',
        'https://i.pinimg.com/736x/de/1a/c4/de1ac4b99e5496a1dd5ef959a7a69c64.jpg',
        //3
        'https://i.pinimg.com/736x/d3/73/a3/d373a3dcd07615bce178622cdcd458fc.jpg',
        'https://i.pinimg.com/736x/d3/73/a3/d373a3dcd07615bce178622cdcd458fc.jpg',
        'https://i.pinimg.com/736x/d3/73/a3/d373a3dcd07615bce178622cdcd458fc.jpg',
        'https://i.pinimg.com/736x/d3/73/a3/d373a3dcd07615bce178622cdcd458fc.jpg',
        //4
        'https://i.pinimg.com/736x/98/98/24/989824e85f8e8e64550ca16480348204.jpg',
        'https://i.pinimg.com/736x/98/98/24/989824e85f8e8e64550ca16480348204.jpg',
        'https://i.pinimg.com/736x/98/98/24/989824e85f8e8e64550ca16480348204.jpg',
        'https://i.pinimg.com/736x/98/98/24/989824e85f8e8e64550ca16480348204.jpg',
        //5
        'https://i.pinimg.com/control2/736x/33/e4/19/33e41989118b44d55c845be71eadf7b7.jpg',
        'https://i.pinimg.com/control2/736x/33/e4/19/33e41989118b44d55c845be71eadf7b7.jpg',
        'https://i.pinimg.com/control2/736x/33/e4/19/33e41989118b44d55c845be71eadf7b7.jpg',
        'https://i.pinimg.com/control2/736x/33/e4/19/33e41989118b44d55c845be71eadf7b7.jpg',
        //6
        'https://i.pinimg.com/736x/52/b7/4f/52b74f77806aa991358e6e6c0ba882a5.jpg',
        'https://i.pinimg.com/736x/52/b7/4f/52b74f77806aa991358e6e6c0ba882a5.jpg',
        'https://i.pinimg.com/736x/52/b7/4f/52b74f77806aa991358e6e6c0ba882a5.jpg',
        'https://i.pinimg.com/736x/52/b7/4f/52b74f77806aa991358e6e6c0ba882a5.jpg',
        //7
        'https://i.pinimg.com/736x/28/f3/36/28f33682843b595f61524cb6cf61d1bd.jpg',
        'https://i.pinimg.com/736x/28/f3/36/28f33682843b595f61524cb6cf61d1bd.jpg',
        'https://i.pinimg.com/736x/28/f3/36/28f33682843b595f61524cb6cf61d1bd.jpg',
        'https://i.pinimg.com/736x/28/f3/36/28f33682843b595f61524cb6cf61d1bd.jpg'
    ]

    const preloadImages = (urls: any) => {
        return Promise.all(
            urls.map((url: any) => {
                return new Promise((resolve, reject) => {
                    const img = new Image();
                    img.src = url;
                    img.onload = resolve;
                    img.onerror = reject;
                });
            })
        );
    };

    useEffect(() => {
        console.log(now)
        //change date mypal
        if (now != "11/21/2024") { // must change to date to today (*dont forget to edit in CountdownPage.tsx. typing in find m'mypal* it will direct you to date edit)
            navigate('/wait')
        }
        else {
            preloadImages(imageUrls)
                .then(() => setImagesLoaded(true))
                .catch((error) => console.error("Error preloading images:", error));
        }
    }, []);

    if (!imagesLoaded) {
        return (
            <div className="grid place-items-center h-screen w-full place-content-center bg-white">
                <HeartSpinner color="#FF0000" />
                <p>Loading images...</p>
            </div>
        );
    }

    return (
        <section className="grid grid-cols-12 divide-x-2 space-x-4">
            <div className="col-span-9">
                <MouseImageTrail
                    renderImageBuffer={60}
                    rotationRange={25}
                    images={imageUrls}
                >
                    <section className="grid h-screen w-full place-content-center bg-white">
                        <p className="flex flex-col items-center gap-2 text-3xl font-bold uppercase text-black">
                            <span className="grid place-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                    <path fillRule="evenodd" d="M17.303 5.197A7.5 7.5 0 0 0 6.697 15.803a.75.75 0 0 1-1.061 1.061A9 9 0 1 1 21 10.5a.75.75 0 0 1-1.5 0c0-1.92-.732-3.839-2.197-5.303Zm-2.121 2.121a4.5 4.5 0 0 0-6.364 6.364.75.75 0 1 1-1.06 1.06A6 6 0 1 1 18 10.5a.75.75 0 0 1-1.5 0c0-1.153-.44-2.303-1.318-3.182Zm-3.634 1.314a.75.75 0 0 1 .82.311l5.228 7.917a.75.75 0 0 1-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 0 1-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 0 1-1.247-.606l.569-9.47a.75.75 0 0 1 .554-.68Z" clipRule="evenodd" />
                                </svg>
                                Gerakin Mouse-nya atau ketuk layar :3</span>
                            <span className="text-sm font-normal text-center text-gray-600">
                                PAKAI LAPTOP/PC YA BIAR KELIATAN JELAS HEHE 
                            </span>
                        </p>
                    </section>
                </MouseImageTrail>
            </div>
            <div className="col-span-3 p-4 bg-rose-950">
                <Card>
                    <CardHeader className="text-center">
                        <CardTitle>Love</CardTitle>
                        <CardDescription>Wave to Earth</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <AudioPlayer src='https://res.cloudinary.com/dtmqtuzxk/video/upload/v1732064672/wave2earth-love_daacwj.mp3'></AudioPlayer>
                        
                    </CardContent>
                </Card>
                <div className="text-pretty p-3 h-max flex justify-center items-center text-white">
                    <div className="grid place-items-center">
                        <h1 className="text-4xl mb-5 font-[Britney-Variable] text-center">Happy 1st Anniversary, My Love!</h1>
                        <p className="mb-4 font-body">I may not have a big surprise for you today, but I hope you’ll love this simple website I made for you
                        </p>
                        <p className="mb-4 font-body">We've been through ups and downs, and it may be even tougher in the future.
                            But I pray that we will endure the hardships to come, with God's strength and provision.
                            May we always seek God in everything we do, together, forever, by His power. <span className="font-bold">I love you!</span>
                        </p>
                        <p className="mb-4 font-body">I may not be exactly what you once imagined,
                            but I promise to be the partner who will always be there for you and meet your needs.
                        </p>
                        <p className="font-body">
                            By the way, this song will always remind me of you.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AnnivPage