import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Information() {

    return (
        <>
            <div className="footer">
                <FontAwesomeIcon
                    icon={faChevronDown}
                    id="up-down-arrow"
                />
                <p id="info-desc">
                    The historical costs of disk storage have been sourced from{" "}
                    <a
                        className="links"
                        href="https://ourworldindata.org/grapher/historical-cost-of-computer-memory-and-storage"
                        target="_blank"
                    >
                        Our World in Data
                    </a>
                    . The costs in this source have not been adjusted for
                    inflation. The costs displayed on this site have been
                    adapted to account for inflation using data from{" "}
                    <a
                        className="links"
                        href="https://www.officialdata.org/us/inflation/1956?endYear=2022"
                        target="_blank"
                    >
                        Official Data
                    </a>
                    .
                </p>
            </div>
        </>
    );
}

export default Information;
