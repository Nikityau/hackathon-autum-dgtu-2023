import React from 'react';
import Desc from "./ui/desc";
import Links from "./ui/links";

import {useToggle} from "../../shared/helpers/hooks/use-toggle";

import './style/index.scss'

type Props = {
    icon: string,
    title: string,
    links: {
        link: string,
        title: string
    }[]
}

const InnerNav = ({icon, links, title}: Props) => {

    const [is, {swtch}] = useToggle()

    return (
        <div className={'inner-nav'}>
            <Desc icon={icon} title={title} is={is} onChange={swtch}/>
            <Links is={is} links={links}/>
        </div>
    );
};

export default InnerNav;