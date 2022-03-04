import Header from "./components/Header"
import { v4 as uuidv4 } from 'uuid'
import {useState} from "react";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AboutIconLink from "./components/AboutIconLink";
import {FeedbackProvider} from "./context/FeedbackContext";

function App() {
    /*const [feedback, setFeedback] = useState(FeedbackData);*/

    return (
        <FeedbackProvider>
            <Router>
                <Header />
                {/*<Header text="Hello World" />*/}
                <div className="container">
                    <Routes>
                        <Route exact path='/' element={
                            <>
                                <FeedbackForm />
                                {/*<FeedbackForm handleAdd={addFeedback}/>*/}
                                <FeedbackStats />
                                {/*<FeedbackStats feedback={feedback}/>*/}
                                <FeedbackList />
                                {/*<FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>*/}
                            </>
                        }
                        ></Route>

                        <Route path='/about' element={<AboutPage/>}/>
                    </Routes>

                    <AboutIconLink />
                </div>
            </Router>
        </FeedbackProvider>
    )
}

export default App