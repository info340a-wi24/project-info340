import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { push } from 'firebase/database';
import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";
import { firebaseConfig } from '../config';
import { Button} from 'reactstrap';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const postsRef = ref(db, 'posts');

export default function Form (props) {
    const[title, setTitle] = useState('');
    const[location, setLocation] = useState('');
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);
    const[description, setDescription] = useState('');
    const[image, setImage] = useState(null);
    const[alt, setAlt] = useState('');


    const notReady = title === '' || location === '' || startTime === null || 
    endTime === null || description === '' || image === null


    const startHandler = (date) => {
        setStartTime(date);
    }

    const endHandler = (date) => {
        setEndTime(date);
    }

    const dropHandler = (e) => {
        setImage(URL.createObjectURL(e.target.files[0]));
    }

    const navigate = useNavigate();
    function navigateTo(props) {
      navigate(props);
    }

    const sendPost = () => {
        // preventDefault
        const post = {
            title,
            location,
            startTime: startTime.toString(),
            endTime: endTime.toString(),
            description,
            image,
            alt
        };
    
        push(postsRef, post)
        .catch((error) => console.log('Error: ', error))
        .then(() => navigateTo("/Home"));
    }

    return (
        <div>
            <main>
            <div className="createEv-container">

                <section>
                    <div className="form-container">
                        <h2  className="createEv">
                            Create your event!
                        </h2>
                        {/* onSubmit={handleSubmit} */}
                        <form method="Post" action="/Publish" >

                            <label for="title_input">
                                Title:
                                <input type="text"
                                id="title_input"
                                name="title" size="20"
                                placeholder="Put in your event name here..."
                                onChange={(e) => setTitle(e.target.value)}
                                />
                            </label>


                            <label for="location_input">
                                Location:
                                <input type="text"
                                id="location_input"
                                name="location"
                                placeholder="Where do you want to hold it?..."
                                onChange={(e) => setLocation(e.target.value)}
                                />
                            </label>


                            <div className="time">

                                <div className='start'>
                                    <label for="Start_time">
                                        Start time:
                                    <DatePicker
                                        selected={startTime}
                                        onChange={startHandler}
                                        minDate={new Date()}
                                        dateFormat='MM/dd/yyyy HH:mm'
                                        showTimeSelect
                                        timeInterval={15}
                                        timeFormat='HH:mm'
                                    />
                                    </label>
                                </div>


                                <div className='end'>
                                    <label for="Start_time">
                                        End time:
                                    <DatePicker
                                        selected={endTime}
                                        onChange={endHandler}
                                        minDate={startTime}
                                        dateFormat='MM/dd/yyyy HH:mm'
                                        showTimeSelect
                                        timeInterval={15}
                                        timeFormat='HH:mm'

                                    />
                                    </label>
                                </div>
                            </div>

                            <label for="description_input">
                                Description:
                                <textarea className="description" id="description_input" name="description"
                                rows="10" cols="50" placeholder="Share something about your event :))"
                                onChange={(e) => setDescription(e.target.value)}
                                />
                            </label>


                            <p>Upload the graphic of your event here: </p>
                            <input type="file" accept='.jpg,.png' onChange={dropHandler} />
                            {/* <img src={image} alt={title}/> */}

                            <label for="alt_input">
                                Alternate text:
                                <input type="text"
                                id="alt"
                                name="alt" size="20"
                                placeholder="Put in the alt text for your image here..."
                                onChange={(e) => setAlt(e.target.value)}
                                />
                            </label>

                        </form>

                        <Button type="submit" onClick={sendPost} disabled={notReady}>Publish</Button>
                    </div>
                </section>
            </div>
        </main>
        </div>
    );
}

