function StarShipDetail({detail}){
    
    return (
        <div>
            {Object.keys(detail).map((k, idx) => (
                <p key={idx}>{k} : {detail[k]} </p>
            ))};
        </div>
    )
}
export default StarShipDetail;