import React from "react";

const Block = () => {
    return (
        <div className="background">
            <p className='blockP pt-4'><img src='../../../block.png' />BLOCKS</p>
            <div className="block bg-white container pt-3" style = {{ borderRadius:'14px'}}>
                <div className="row">
                    <div className="d-flex justify-content-between">
                        <p className= "mt-2" style={{ width:'100px', marginLft:'e20px'}}><b>Blocks</b></p>
                        <div className="d-flex justify-content-end">
                            <button className="mr-1 btn btn-secondary">Blocks</button>
                            <button className="btn btn-light ml-4">Transactions</button>            
                        </div>
                    </div>
                </div>
                <table className="table table-striped table-hover text-center">
                    <thead className='table-dark'>
                        <tr>
                            <th>No</th>
                            <th>Height</th>
                            <th>Block Hash</th>
                            <th>Porposer</th>
                            <th>Txs</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>344,818,012</td>
                            <td>A09F4AF9B45CFE31C01FB0FD44741063E166B7FDB</td>
                            <td>Mandragora</td>
                            <td>15</td>
                            <td>34s ago</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>344,818,012</td>
                            <td>A09F4AF9B45CFE31C01FB0FD44741063E166B7FDB</td>
                            <td>Mandragora</td>
                            <td>15</td>
                            <td>34s ago</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>344,818,012</td>
                            <td>A09F4AF9B45CFE31C01FB0FD44741063E166B7FDB</td>
                            <td>Mandragora</td>
                            <td>15</td>
                            <td>34s ago</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>344,818,012</td>
                            <td>A09F4AF9B45CFE31C01FB0FD44741063E166B7FDB</td>
                            <td>Mandragora</td>
                            <td>15</td>
                            <td>34s ago</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>344,818,012</td>
                            <td>A09F4AF9B45CFE31C01FB0FD44741063E166B7FDB</td>
                            <td>Mandragora</td>
                            <td>15</td>
                            <td>34s ago</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>344,818,012</td>
                            <td>A09F4AF9B45CFE31C01FB0FD44741063E166B7FDB</td>
                            <td>Mandragora</td>
                            <td>15</td>
                            <td>34s ago</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>344,818,012</td>
                            <td>A09F4AF9B45CFE31C01FB0FD44741063E166B7FDB</td>
                            <td>Mandragora</td>
                            <td>15</td>
                            <td>34s ago</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>344,818,012</td>
                            <td>A09F4AF9B45CFE31C01FB0FD44741063E166B7FDB</td>
                            <td>Mandragora</td>
                            <td>15</td>
                            <td>34s ago</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
        </div>
    )
}

export default Block;