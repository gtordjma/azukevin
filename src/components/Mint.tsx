import { utils } from 'ethers'
import { Contract } from '@ethersproject/contracts'
import abi from '../contract/abi.json';
import { ContractCall, useContractFunction, useEthers, useContractCall } from '@usedapp/core';
import { Button, Typography } from '@material-ui/core';
import { useState } from 'react';

export const Mint = () => {


    const { chainId, account } = useEthers()
    const isConnected = account !== undefined

    const wethInterface = new utils.Interface(abi.abi)
    const wethContractAddress = '0x1d2175026745d2bB9b4A270312feC02Ff016b2D3'
    const contract = new Contract(wethContractAddress, wethInterface)

    const totalMinted = useContractCall({
        abi: wethInterface,
        address: wethContractAddress,
        method: "totalSupply",
        args: []
    })

    const { send: mintSend, state: mintState } = useContractFunction(contract, 'mint', {
        transactionName: "Mint",
    })

    const mint = () => {
        const check = Number(totalMinted)
        const amount = (check <= 255 ? 0 : numberOfMint * 15000000000000000)
        mintSend(numberOfMint, { value: amount.toString() })
    }

    const [numberOfMint, setNumberOfMint] = useState(5);

    const lowerNumberMint = () => {
        if (numberOfMint > 0)
            setNumberOfMint(numberOfMint - 1);
    }
    const upperNumberMint = () => {
        if (numberOfMint < 5)
            setNumberOfMint(numberOfMint + 1);
    }



    return (

        <>
            <div className="mint-box">
                <div className=''>
                    {
                        isConnected ? (
                            chainId != 1 ? (<p>Please Connect to the Mainnet Network</p>) : (

                                <div className='upbutton'>
                                    <p>Total Azukevin: 555</p>
                                    <p>First 255 Free, 0.015ETH then</p><br /><br />
                                    <p>{mintState.status === 'None' ? "" : "Mint status: " + mintState.status}</p>
                                    <p>{mintState.errorMessage}</p>
                                    <div className='nbmint'>
                                        <Button onClick={lowerNumberMint}><span >-</span></Button>
                                        <Typography variant="body1" >{numberOfMint}</Typography>
                                        <Button onClick={upperNumberMint}><span >+</span></Button>
                                        <Button className='button' onClick={mint}>Mint</Button>
                                    </div>

                                    <p>Total minted: {totalMinted ? totalMinted.toString() : 0} / 555</p>
                                </div>
                            )) : (
                            <div className='upbutton'>
                                <p>Please connect your wallet</p><br /><br />
                                <p>Total Azukevin: 555</p>
                                <p>First 255 Free, 0.015ETH then</p>
                            </div>
                        )


                    }

                </div>
            </div>
        </>


    )
}