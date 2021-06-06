
import LeftContent from './leftContent';
import RightContent from './rightContent';
import Header from './../header/index';
import Footer from './../footer/index';
import { useSelector } from 'react-redux';



export default function MainContent() {
    const state = useSelector(rootstate => rootstate);
    console.log(state)


    return (
        <>
         <Header></Header>
            <main>
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
            </main>
       <Footer></Footer>
        </>
    )
}