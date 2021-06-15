
import LeftContent from './leftContent';
import RightContent from './rightContent';



export default function MainContent() {
 
    return (
        <div className="container">
        {/*sections*/}
        <div className="row">
            <div className="col-lg-8">
           <LeftContent ></LeftContent>
            </div>
            <div className="col-lg-4">
                <RightContent></RightContent>
            </div>
        </div>
    </div>

    )
}