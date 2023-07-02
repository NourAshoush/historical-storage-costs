import "./Footer.css";

function Information() {
  return (
    <>
      <p id="info-desc">
        The historical costs of disk storage have been adapted from{" "}
        <a href="https://ourworldindata.org/grapher/historical-cost-of-computer-memory-and-storage">
          Our World in Data
        </a>
        . Costs are depicted as $/TB for each year. The costs in this source
        have not been adjusted for inflation.
      </p>
      <button type="button" className="btn btn-danger download">
        <a href="https://raw.githubusercontent.com/NourAshoush/historical-storage-costs/main/src/assets/Color%20Hunt%20Palette%20ffeaddfcaeaeff8989ff6666.png">
          Download CSV
        </a>
      </button>
    </>
  );
}

export default Information;
