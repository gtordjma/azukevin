import { useEthers } from '@usedapp/core'
import { Button, makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    container: {
        padding: theme.spacing(4),
        position: "absolute",
        right: "1%",
        top: "1%",
        justifyContent: "flex-end",
    },
}))

export const Header = () => {
    const classes = useStyles()

    const { account, activateBrowserWallet, deactivate, error } = useEthers()

    const isConnected = account !== undefined

    return (

        <div className={classes.container} >
            {isConnected ? (
                <Button variant="contained" onClick={deactivate}>
                    Disconnect
                </Button>
            ) : (
                <Button
                    color="primary"
                    variant="contained"
                    onClick={() => activateBrowserWallet()}
                >
                    Connect
                </Button>
            )}
        </div>
    )
}