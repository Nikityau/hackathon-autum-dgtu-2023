import React from 'react';
import {Link} from "react-router-dom";
import {nanoid} from "nanoid";
import cn from "classnames";

type Props = {
    is: boolean
    links: {
        link: string,
        title: string
    }[]
}

const Links = ({links, is}:Props) => {
    return (
        <div className={cn(
            'inner-nav__links',
            is && 'inner-nav__links_open'
        )}>
            {
                links.map(l => (
                    <Link to={l.link} key={nanoid()}>
                        <span>{l.title}</span>
                    </Link>
                ))
            }
        </div>
    );
};

export default Links;