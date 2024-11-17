import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { AuthContext } from "../AuthProvider";

const RightLayout = () => {

    const { user } = useContext(AuthContext);

    return (
        <div>
            {
                !user && <>

                    <div>
                        <h3>Login With</h3>
                    </div>
                    <div className="flex flex-col space-y-3 mt-6">
                        <button className="btn"><FaGoogle></FaGoogle> Login With Google</button>
                        <button className="btn"><FaGithub></FaGithub> Login With Github</button>
                    </div>
                </>
            }
        </div>
    );
};

export default RightLayout;