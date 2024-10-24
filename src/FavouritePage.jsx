import { useContext } from 'react';
import PropTypes from 'prop-types';
import { Favs_arry } from './path-to-your-existing-context'; // Assuming this is your context
import Movie_temp from './movie';

function FavPage(props) {
    const favs = useContext(Favs_arry);  // This is where you access the context

    return (
        <div>
            <div className="card_container">
                {favs.map((item, index) => (
                    <Movie_temp
                        num={index.toString()}
                        key={index}
                        text={item.text}
                        img={item.image}
                        title={item.location}
                    />
                ))}
            </div>
        </div>
    );
}

FavPage.propTypes = {
    props: PropTypes.object,
};

export default FavPage;
