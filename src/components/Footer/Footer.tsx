import "./Footer.css";

function Information() {
  return (
    <>
      <p id="info-desc">
        The historical costs of disk storage have been adapted from{" "}
        <a
          href="https://ourworldindata.org/grapher/historical-cost-of-computer-memory-and-storage"
          target="_blank"
        >
          Our World in Data
        </a>
        . Costs are depicted as $/TB for each year. The costs in this source
        have not been adjusted for inflation, however, the costs on this site
        have been adjusted for inflation using based on data from {" "}
        <a
          href="https://www.officialdata.org/us/inflation/1956?endYear=2022"
          target="_blank"
        >
          Official Data
        </a>
        .
      </p>
    </>
  );
}

export default Information;
