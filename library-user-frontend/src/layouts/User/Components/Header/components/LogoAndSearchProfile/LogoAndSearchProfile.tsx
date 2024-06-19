import { Logo } from './Logo';
import { Profile } from './Profile';
import { Search } from './Search';

export const LogoAndSearchProfile = () => {
    return (
        <div className="tg-middlecontainer">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <Logo />
                        <Profile />
                        <Search />
                    </div>
                </div>
            </div>
        </div>
    );
};
