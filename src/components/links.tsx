import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { SiLeetcode } from "react-icons/si";
import { TbBrandDiscord } from "react-icons/tb";

export default function Links() {
    return <>
        <footer>
            <ul className="flex justify-center gap-8">
                <a href="https://github.com/devendra-official" title="GitHub"><FaGithub size={28}/></a>
                <a href="https://leetcode.com/devendra__b/" title="Leetcode"><SiLeetcode size={28}/></a>
                <a href="https://discord.com/users/its_devendra" title="Discord"><TbBrandDiscord size={28}/></a>
                <a href="#" title="LinkedIn"><CiLinkedin size={28}/></a>
            </ul>
        </footer>
    </>
}