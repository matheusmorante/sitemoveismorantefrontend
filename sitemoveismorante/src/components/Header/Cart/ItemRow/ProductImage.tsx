const ProductImage = ({ src }: { src: string }) => {
    return (
        <div>
            <img src={src} className="w-[140px]"/>
        </div>
    )
}

export default ProductImage