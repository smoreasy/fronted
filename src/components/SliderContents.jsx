const SliderContents = ({ slide, image }) => {
    console.log(image)
    return (
        <li
            style={{
                transform: `translateX(${slide}px)`,
                transition: '0.5s ease',
            }}
        >
            <img src={image} />
        </li>
    )
}

export default SliderContents;