function StarShipDetail({starship}){
    
    return (
        <div className="fs-6 mt-2 detail-card">
            <p>MGLT : {starship.MGLT}</p>
            <p>Created : {starship.created}</p>
            <p>Manufacturer : {starship.manufacturer}</p>
            <p>Passengers : {starship.passengers}</p>
        </div>
    )
}
export default StarShipDetail;