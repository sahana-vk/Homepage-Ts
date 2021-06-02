import Logo from "../../molecules/logo/Logo";
import NavLink from "../../molecules/navLink/NavLink";
import Search from "../../molecules/search/Search";
import "./style.css";

const Header = () => {
    return(
        <div className="header">
            <div className="header-toolbar">
                <Logo content={{
                    logo: "discovery-logo.png",
                    logoAlt: "Discovery",
                    list: "items.jpg",
                    listAlt: "List"
                }}
                />
                <NavLink content={["Home","Explore","Shorts", "MindBlown", "Kids", "Premium"]}/>
                <div className="grow">
                </div>
                <Search content={{
                        placeHolder: "Search for shows, episodes, shorts etc.",
                        button: "Sign In"
                    }}
                    />
            </div>
        </div>
    );
};

export default Header;