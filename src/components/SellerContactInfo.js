import React, {forwardRef,useImperativeHandle} from 'react';
import './SellerContactInfo.css'

const SellerContactInfo=forwardRef((props,ref)=> {

    const [display, setDisplay]=React.useState(false);

    const open=()=>{
        setDisplay(true);
    }

    const close=()=>{
        setDisplay(false);
    };
    useImperativeHandle(ref,()=>{
        return{
            openModal: () => open(),
            close: () => close()
        }
    })
    if(display){
        return (
            <div className="infoWrapper">
                    <div onClick={close} className="infoBackdrop"/>
                    <div className="infoBox">
                        <div id="sellerDetail">
                            <p>Seller Name: </p>
                            <p>Mail ID: </p>
                            <p>Contact Number: </p>
                        </div>
                        <button id="hideButton" onClick={close}>Hide</button>
                    </div>
                    
                </div>
        )
    }
    return null;
    
});

export default SellerContactInfo
