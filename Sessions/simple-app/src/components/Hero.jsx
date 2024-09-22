export default function Hero(prop){
    return(
<div>
<main className="row">
            <div className="col">
                <h1 className="text-center">{prop.title}</h1>
                <div>
                    <img className="img-xxl" src={"assets/images/" + prop.photo} alt={prop.title} />
                </div>
            </div>
        </main>
</div>
    );
}