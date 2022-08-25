

const Unit = ({data, deleteFn}) => {

    const styleSheet = {
        marginTop: '20px',
        marginLeft: '50px',
        textAlign: 'left',
        fontSize: 20,
    }

    const margin = {
        paddingLeft: '10px'
    }

    const buttonStyle = {
        width: '60px',
        height: '30px',
        marginLeft: '80px'
    }

    return(
        <table style={styleSheet}>
            <tr>
                <th>Code</th>
                <th>Title</th>
                <th>Offerings</th>
            </tr>
            {data.map( unit =>
                <tr key={unit.id}>
                    <td style={margin}>{unit.code}</td>
                    <td style={margin}>{unit.title}</td>
                    <td style={margin}>{unit.offering.map(o => <span key = {o}> {o} </span>)}</td>
                    <td><button style={buttonStyle} onClick={() => deleteFn(unit)}>Delete</button></td>
                </tr>
            )}
            
        </table>
    )
}

export default Unit

