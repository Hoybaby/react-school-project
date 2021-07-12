
import Body from '../Body/Body';

import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

const Example = () => {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    return (
        <div>
            <Body ref={componentRef} />
            <button onClick={handlePrint}>Print this out!</button>
        </div>
    );
};

export default Example


// class Example extends React.PureComponent {
//     render() {
//         return (
//             <div>
//                 <ReactToPrint
//                     trigger={() => {
//                         // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
//                         // to the root node of the returned component as it will be overwritten.
//                         return <a href="#">Print this out!</a>;
//                     }}
//                     content={() => this.componentRef}
//                 />
//                 <ComponentToPrint ref={el => (this.componentRef = el)} />
//             </div>
//         );
//     }
// }

// export default Example;