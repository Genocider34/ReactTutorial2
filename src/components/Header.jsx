import reactImg from '../assets/react-core-concepts.png'

const reactDescriptions = ["Fundamentals", "Crucial", "Core"];
function genRandomNumber(num) {
    return Math.floor(Math.random() * (num + 1));
}

export default function Header() {
    const description = reactDescriptions[genRandomNumber(reactDescriptions.length)];

    return (
        <header>
            <img src={reactImg} alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>
            {description} React concepts you will need for almost any app you are
            going to build!
            </p>
        </header>)
}