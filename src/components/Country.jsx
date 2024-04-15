

function Country({country}) {
    return (
        <div className="country">
            <img className="country__img" src={country.flags.png} alt='Country flag' />
            <h3 className="country__name">{country.name.common}</h3>
            <div className="country__info">
                <p className="country__description">Region: {country.region}</p>
                <p className="country__description">Capital: {country.capital}</p>
                <p className="country__description">Population: {country.population}</p>
            </div>
        </div>
    );
}

export default Country;