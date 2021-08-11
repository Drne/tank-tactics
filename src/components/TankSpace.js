export default function TankSpace({health, supply, name}) {
    return (
        <div style={{display: 'flex', flexDirection: 'column', padding: 2}}>
            <img src={"https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/28562/tank-1-clipart-md.png"}
                 style={{maxHeight: 20, maxWidth: 20, alignSelf: 'center'}}/>
            {name}
            <div style={{display: 'flex', flexWrap: 'nowrap', alignSelf: 'center'}}>
                <div>
                    <img src={"https://static.thenounproject.com/png/2111027-200.png"}
                         style={{maxHeight: 20, maxWidth: 20, alignSelf: 'center'}}/>
                    {supply}
                </div>
                <div>
                    <img
                        src={"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png"}
                        style={{maxHeight: 20, maxWidth: 20, alignSelf: 'center'}}/>
                    {health}
                </div>
            </div>
        </div>
    )
}