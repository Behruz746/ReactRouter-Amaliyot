import { NavLink, useLocation } from 'react-router-dom';

function BreadCrumbs() {
    const mapLink = [];
    const location = useLocation();

    const mapLocation = location.pathname.split('/')
        .filter((map)=> map !== '')
        .map((map)=> {
            mapLink.push(`/${map}`)
            return (
                <div className='map' ket={map}>
                    <NavLink to={mapLink.join('')}>{`/${map}`}</NavLink>
                </div>
            )
        });

  return (
    <div className='map__content'>
        <h3>Map:</h3>
        {mapLocation}
    </div>
  )
}

export default BreadCrumbs;