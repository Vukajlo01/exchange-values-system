import React, { useEffect, useState } from 'react';
import IAccountsTableData from '../../interfaces/IAccountsTableData';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { TbTransferVertical } from 'react-icons/tb';
import { AiOutlineTransaction } from 'react-icons/ai';
import ICurrentAccount from '../../interfaces/ICurrentAccount';

const AccountsTable: React.FC<IAccountsTableData> = ({ card_number }) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [accounts, setAccounts] = useState<ICurrentAccount[]>([]);

    useEffect(() => {

    }, []);

    return (
        <div>
            {loading ? <LoadingSpinner background='bg-transparent' minH='0' /> :
                accounts.length === 0 ? <div>No data</div> :
                    <table className="mx-auto text-md text-left text-black dark:text-white rounded-lg overflow-hidden w-3/5">
                        <thead className="text-lg text-white bg-sky-800">
                            <tr>
                                <th scope="col font-semibold" className="font-semibold px-6 py-1">
                                    Account Number
                                </th>
                                <th scope="col" className="font-semibold px-10 py-1">
                                    Balance
                                </th>
                                <th scope="col" className="font-semibold px-4 py-1">
                                    Currency
                                </th>
                                <th scope="col" className="font-semibold px-8 py-1">
                                    Account Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {accounts.map((account: ICurrentAccount, index: number) => (
                                <tr key={index}
                                    className="bg-white border-1 border-b-gray-950 dark:bg-slate-950 dark:border-gray-700"
                                >
                                    <td className="px-10 py-2">{account.account_number}</td>
                                    <td className="px-10 py-2">{account.balance}</td>
                                    <td className="px-4 py-2">{account.currency}</td>
                                    <td className='px-8 py-2 flex space-x-6'>
                                        <div className="flex flex-wrap my-2">
                                            <button onClick={() => { console.log(account.account_id) }} className="px-5 py-1.5 bg-[#124191] text-white text-md rounded-lg hover:bg-blue-900">
                                                <AiOutlineTransaction className="inline -mt-1 mr-2 text-2xl" />
                                                Exchange Funds</button>
                                        </div>
                                        <div className="flex flex-wrap my-2">
                                            <button onClick={() => { }} className="px-5 py-1.5 bg-orange-800 text-white text-md rounded-lg hover:bg-orange-900">
                                                <TbTransferVertical className="inline -mt-1 mr-2 text-2xl" />
                                                Transfer Funds</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
            }
        </div>
    );
};

export default AccountsTable;
