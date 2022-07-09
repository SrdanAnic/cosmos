import { Table } from "react-bootstrap";

const tableItems = [
    { rank: "01", type: "Polychain", voting: "344,818,123", votingValue: "12.19", cumulative: "12.19", participation: "0/16", uptime: "100", commission: "20.00", url: "/images/validators/8.png", url2: "/images/validators/Path 248.png" },
    { rank: "02", type: "Stakefish", voting: "344,818,123", votingValue: "12.19", cumulative: "12.19", participation: "0/16", uptime: "100", commission: "20.00", url: "/images/validators/7.png", url2: "/images/validators/Path 248.png" },
    { rank: "03", type: "Stakefish", voting: "344,818,123", votingValue: "12.19", cumulative: "12.19", participation: "0/16", uptime: "100", commission: "20.00", url: "/images/validators/7.png", url2: "/images/validators/Path 248.png" },
    { rank: "04", type: "Stakefish", voting: "344,818,123", votingValue: "12.19", cumulative: "12.19", participation: "0/16", uptime: "100", commission: "20.00", url: "/images/validators/7.png", url2: "/images/validators/Path 248.png" },
    { rank: "05", type: "Stakefish", voting: "344,818,123", votingValue: "12.19", cumulative: "12.19", participation: "0/16", uptime: "100", commission: "20.00", url: "/images/validators/7.png", url2: "/images/validators/Path 248.png" },
    { rank: "06", type: "Stakefish", voting: "344,818,123", votingValue: "12.19", cumulative: "12.19", participation: "0/16", uptime: "100", commission: "20.00", url: "/images/validators/7.png", url2: "/images/validators/Path 248.png" },
    { rank: "07", type: "Stakefish", voting: "344,818,123", votingValue: "12.19", cumulative: "12.19", participation: "0/16", uptime: "100", commission: "20.00", url: "/images/validators/7.png", url2: "/images/validators/Path 248.png" },
    { rank: "08", type: "Stakefish", voting: "344,818,123", votingValue: "12.19", cumulative: "12.19", participation: "0/16", uptime: "100", commission: "20.00", url: "/images/validators/7.png", url2: "/images/validators/Path 248.png" },
    { rank: "09", type: "Stakefish", voting: "344,818,123", votingValue: "12.19", cumulative: "12.19", participation: "0/16", uptime: "100", commission: "20.00", url: "/images/validators/7.png", url2: "/images/validators/Path 248.png" },
    { rank: "10", type: "Stakefish", voting: "344,818,123", votingValue: "12.19", cumulative: "12.19", participation: "0/16", uptime: "100", commission: "20.00", url: "/images/validators/7.png", url2: "/images/validators/Path 248.png" },
]

const ValidatorsRank = () => {
    return (
        <div className="validatorsRank">
            <div className="d-flex align-items-center mb-3 mt-5">
                <img className="validators_icon" src='/images/validators/6.png' />
                <strong>VALIDATORS Rank</strong>
            </div>
            <div className="validators_body">
                <div className="d-flex justify-content-between align-items-center p-2 pl-4 pr-4">
                    <strong>validators</strong>
                    <div className="d-flex justify-content-between align-items-center">
                        <input placeholder="Validators" type="text" className="validators_search" />
                        <button className="validators_active">Active</button>
                        <button className="validators_inactive">Inactive</button>
                    </div>
                </div>
                <Table striped bordered hover>
                    <thead className="table_head">
                        <tr>
                            <th>Rank</th>
                            <th>
                                Type
                                <img src="/images/validators/Group 2039.png" />
                            </th>
                            <th>
                                Voting Power
                                <img src="/images/validators/Group 2039.png" />
                                
                            </th>
                            <th>Cumulative Share %</th>
                            <th>
                                Participation
                                <img src="/images/validators/Group 2039.png" />
                                
                            </th>
                            <th>
                                Uptime
                                <img src="/images/validators/Group 2039.png" />
                            </th>
                            <th>
                                Commission
                                <img src="/images/validators/Group 2039.png" />
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        { tableItems.map((tableItem, i) => (
                            <tr key={i}>
                                <td>
                                    <div className="rank_field">
                                        {tableItem.rank}
                                    </div>
                                </td>
                                <td>
                                    <img className="table_icon" src={tableItem.url} />
                                    {tableItem.type}
                                </td>
                                <td className="">
                                    <span>{tableItem.voting}</span>
                                    <span>{tableItem.votingValue}</span>
                                </td>
                                <td className="dflex">
                                    {tableItem.cumulative}
                                    <img className="table_icon2" src={tableItem.url2} /> 
                                </td>
                                <td>
                                    <div className="participation_field">
                                        {tableItem.participation}
                                    </div>
                                </td>
                                <td>{tableItem.uptime}</td>
                                <td>{tableItem.commission}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default ValidatorsRank;