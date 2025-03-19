const ProductDescription = () => {
    return (
        <div className="mt-20">
            <div className="flex gap-3 mb-4">
                <button className="btn_dark_rounded !rounded-none !text-xs !py-[6px] w-36">
                    Description
                </button>
                <button className="btn_dark_outline !rounded-none !text-xs !py-[6px] w-36">
                    Care Guide
                </button>
                <button className="btn_dark_outline !rounded-none !text-xs !py-[6px] w-36">
                    Size Guide
                </button>
            </div>
            <div className="flex flex-col pb-0">
                <p className="text-sm ">
                    Inspired by classic designs, The Lorenz’s latest collection blends
                    vintage charm with contemporary elegance. Crafted from premium fabrics
                    with a mix of soft textures and sleek finishes, each piece delivers
                    a refined yet effortless look. Whether it's the subtle sheen of
                    high-quality materials or the perfect balance of comfort and style,
                    this collection is all about everyday sophistication with a modern twist.
                </p>
                <p className="text-sm">
                    Designed for versatility and made for the trendsetters, these pieces
                    transition seamlessly from casual outings to elevated streetwear.
                    With attention to detail and a focus on timeless appeal,
                    The Loren ensures you stay ahead in both fashion and comfort.
                </p>
            </div>
        </div>
    );
};

export default ProductDescription;
