import Link from "../../atoms/link/Link";
import "./style.css";

interface Props {
    content: string[];
}

const NavLink = ({ content }: Props) => (
    <div className="nav-links">
        {
            content.map((link, index) => (
                <Link
                    key={index}
                    text={link}
                    url="/"
                    active={!!index ? 'link': 'link-active'}
                />
            ))
        }
    </div>
);

export default NavLink;