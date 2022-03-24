import React, { useEffect, useState } from 'react';
import Prod from './Prod';
import './Demo.css';
import Info from './Info';
import { adlo, lc } from './local';

const Demo = () => {
    const [prodct, Setpdc] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => Setpdc(data))
    }, []);

    const [cart, Setct] = useState([]);

    useEffect(() => {
        const ar = [];
        const ob = adlo();
        for (const id in ob) {
            const fd = prodct.find(pl => pl.id === id);
            if (fd) {
                const quantity = ob[id];
                fd.quantity = quantity;
                ar.push(fd);
            }
        }
        Setct(ar)
    }, [prodct])

    const a = p => {
        // const b = [...cart, p];
        let arr = [];
        const op = cart.find(pc => pc.id === p.id);
        if (!op) {
            p.quantity = 1;
            arr = [...cart, p];
        }
        else {
            const ex = cart.filter(pk => pk.id !== p.id);
            op.quantity = op.quantity + 1;
            arr = [...ex, op];
        }

        Setct(arr);
        lc(p.id)
    }
    return (
        <div className='dv'>
            <div className='pdc'>
                {
                    prodct.map(p => <Prod pd={p} c={a}></Prod>)
                }
            </div>
            <div className='in'>
                <Info io={cart}></Info>
            </div>

        </div>
    );
};

export default Demo;