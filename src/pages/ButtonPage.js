import Button from "../components/Button";
import {GoCloudDownload, GoAlert, GoBell} from "react-icons/go";

function ButtonPage() {
    function handleClick() {
    }
    return (
        <div>
            <div>
                <Button className="mb-5" success onClick={handleClick}>
                    <GoBell/>
                    Click me!
                </Button>

            </div>
            <div>
                <Button danger outline rounded onMouseEnter={handleClick}>
                    <GoAlert/>
                    Danger!
                </Button>

            </div>

            <div>
                <Button warning>
                    Warning
                </Button>
            </div>
            <div>
                <Button secondary outline>
                    <GoCloudDownload/>
                    Secondary Action
                </Button>
            </div>
            <div>
                <Button primary rounded>
                    Primary Action
                </Button>
            </div>
        </div>
    )
}

export default ButtonPage;