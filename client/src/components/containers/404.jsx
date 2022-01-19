import notFound from "../../assets/imgs/notFound.png"
import { Link } from 'react-router-dom';
import { MainWrapper } from '../../style/userProfile_style'

const NotFoundPage = () => {
    
    return (

        <MainWrapper className="notFoundPage-wrapper page">
            <div>
                <img src={notFound} alt="not found logo" />
            </div>
            <h1>Oups! La page que vous demandez n'existe pas</h1>
            <Link to="/"><h2>Retourner à la page d'accueil</h2></Link>
        </MainWrapper>
    )
}
export default NotFoundPage