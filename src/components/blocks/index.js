import { Table } from "react-bootstrap"

const tableItems = [
    { no: "1", height: "344,818,012", hash: "", proposer: "Mandragora", txs: "15", time: "34" },
    { no: "2", height: "344,818,012", hash: "A09F4AF9B45CFE31C01FB0FD44741063E166B7FDB", proposer: "Mandragora", txs: "15", time: "34" },
    { no: "3", height: "344,818,012", hash: "A09F4AF9B45CFE31C01FB0FD44741063E166B7FDB", proposer: "Mandragora", txs: "15", time: "34" },
    { no: "4", height: "344,818,012", hash: "A09F4AF9B45CFE31C01FB0FD44741063E166B7FDB", proposer: "Mandragora", txs: "15", time: "34" },
    { no: "5", height: "344,818,012", hash: "A09F4AF9B45CFE31C01FB0FD44741063E166B7FDB", proposer: "Mandragora", txs: "15", time: "34" },
    { no: "6", height: "344,818,012", hash: "A09F4AF9B45CFE31C01FB0FD44741063E166B7FDB", proposer: "Mandragora", txs: "15", time: "34" },
    { no: "7", height: "344,818,012", hash: "A09F4AF9B45CFE31C01FB0FD44741063E166B7FDB", proposer: "Mandragora", txs: "15", time: "34" },
    { no: "8", height: "344,818,012", hash: "A09F4AF9B45CFE31C01FB0FD44741063E166B7FDB", proposer: "Mandragora", txs: "15", time: "34" },
    { no: "9", height: "344,818,012", hash: "A09F4AF9B45CFE31C01FB0FD44741063E166B7FDB", proposer: "Mandragora", txs: "15", time: "34" },
    { no: "10", height: "344,818,012", hash: "A09F4AF9B45CFE31C01FB0FD44741063E166B7FDB", proposer: "Mandragora", txs: "15", time: "34" },
]

const Blocks = () => {
    return (
        <div className="container block mt-5">
            <strong className="block_title">BLOCKS</strong>
            <div className="block_body">
                <div className="d-flex justify-content-between align-items-center mb-1 p-2">
                    <div className="d-flex justify-content-between align-items-center">
                        <img className="validators_icon" src='/images/validators/1.png' />
                        <strong style={{marginLeft: 30}}>Blocks</strong>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <button className="block_btn">Blocks</button>
                        <button className="transaction_btn">Transactions</button>
                    </div>
                </div>
                <Table striped hover>
                    <thead className="table_head">
                        <tr>
                            <th>No.</th>
                            <th>Height</th>
                            <th>Block Hash</th>
                            <th>Proposer</th>
                            <th>Txs</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        { tableItems.map((tableItem, i) => (
                            <tr key={i}>
                                <td>
                                    <div className="rank_field">{tableItem.no} </div>
                                </td>
                                <td>{tableItem.height}</td>
                                <td>{tableItem.hash}</td>
                                <td>{tableItem.proposer}</td>
                                <td>{tableItem.txs}</td>
                                <td>{tableItem.time}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default Blocks