import Fireworks from "react-canvas-confetti/dist/presets/fireworks";

function Confetti() {
    return <Fireworks autorun={{ speed: 2, duration: 3000 }} />;
}

export default Confetti;