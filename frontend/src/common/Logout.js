import React from "react";
import Button from "@material-ui/core/Button";
import ArrowBack from "@material-ui/icons/ExitToApp";
//import { i18n, Link, withNamespaces } from '../i18n';


 class Logout extends React.Component {
    constructor(props) {
        super(props);
    }

    // logout() {
    //     return this.props.apolloClient.mutate({
    //         mutation: gql`
    //             mutation {
    //                 removeSession
    //             }
    //         `
    //     })
    //     .then(async (data) => {
    //         if (data !== null) {
    //             sessionStorage.clear();
    //             await this.props.apolloClient.clearStore();
    //             Router.replace("/");
    //         }
    //         return null;
    //     })
    //     .catch(async (error) => {
    //         sessionStorage.clear();
    //         await this.props.apolloClient.clearStore().then(() => {
    //             Router.replace("/");
    //         });
    //         return null;
    //     })
    // }


    render() {
        const { t } = this.props;
        return (
            <div>
                <Button
                    color="inherit"
                    onClick={e => {
                        e.preventDefault();
                        e.stopPropagation();
                        //this.logout();
                    }}
                >
                    {t('logout')}
                    &nbsp;
                    <ArrowBack/>
                </Button>
            </div>
        );
    }
}

export default (Logout);