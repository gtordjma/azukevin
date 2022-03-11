import { ContractCall, useContractFunction, useEthers, useContractCall } from '@usedapp/core';


export const Mint = () => {


    const { chainId, account } = useEthers()
    const isConnected = account !== undefined


    return (

        <>
            {
                isConnected ? (
                    chainId != 1 ? (<p>Please Connect to the Mainnet Network</p>) : (
                        <div className="mint-box">
                            <div className=''>
                                <div className='upbutton'>
                                    <button className='button'>FREE MINT SOON</button>
                                </div>
                            </div>
                        </div >
                    )) : (
                    <></>
                )

            }
        </>


    )
}