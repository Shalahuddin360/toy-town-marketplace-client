

const GallaryCard = ({ toy }) => {
    const { toyPicture, toyName , toyPrice ,toyRating, toyDescription } = toy
    // console.log(toyName , toyPicture)
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-4 pt-4">
                    <img src={toyPicture} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{toyName}</h2>
                    <p className="text-xl">Price : {toyPrice}</p>
                    <p className="text-xl">Rating: {toyRating}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary"> Read More Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GallaryCard;