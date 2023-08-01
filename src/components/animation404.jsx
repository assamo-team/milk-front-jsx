import { Controls, Player } from "@lottiefiles/react-lottie-player";

export default function Animation404() {

    return (
            <Player
            autoplay
            loop
            src='/animation404.json'
            style={{ height: '300px', width: '500px' }}
            >
            </Player>
    )
}