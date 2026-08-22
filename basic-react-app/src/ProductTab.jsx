import Product from "./Product";


export default function ProductTab() {
    const features = ["good", "flexible", "reliable"]
    // const features = {a : "HighTech", b : "flexible", c : "fast"}
    return (
        <>
          <Product title="title 1" description="description 1" price = {1000} features={features}/>
          <Product title="title 2" description="description 2" price={999} features={features}/>
          <Product title="title 3" price={123} features={features}/>
        </>
    )
}

