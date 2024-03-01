import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


export default function Form (props) {

    const[title, setTitle] = useState('');
    const[location, setLocation] = useState('');
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);
    const[description, setDescription] = useState('');
    const[image, setImage] = useState(null);

    const startHandler = (date) => {
        setStartTime(date);
    }

    const endHandler = (date) => {
        setEndTime(date);
    }

    const dropHandler = (e) => {
        console.log(e.target.files);
        setImage(URL.createObjectURL(e.target.files[0]));
    }

    const navigate = useNavigate();
    function navigateTo(props) {
      navigate(props);
    }

    // onFileUpload = () => {
    //     // Create an object of formData
    //     const formData = new FormData();
 
    //     // Update the formData object
    //     formData.append(
    //         "myFile",
    //         this.state.selectedFile,
    //         this.state.selectedFile.name
    //     );
 
    //     // Details of the uploaded file
    //     console.log(this.state.selectedFile);
 
    //     // // Request made to the backend api
    //     // // Send formData object
    //     // axios.post("api/uploadfile", formData);
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        const post = {
            title,
            location,
            startTime,
            endTime,
            description,
            image
        }

    }

    return (
        <div>
            <main>
            <div class="createEv-container">
                {/* <section>
                    <div class="sidebar">
                        <i class="fa fa-save" aria-label="save-form" style="font-size:36px;"></i>
                    </div>
                </section> */}

                <section>
                    <div class="form-container">
                        <h2  class="createEv">
                            Create your event!
                        </h2>

                        <form method="Post" action="/Publish" onSubmit={handleSubmit}>

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
                            

                            <div class="time">
                                
                                <div className='start'>
                                    <label for="Start_time">
                                        Start time:    
                                    <DatePicker
                                        selected={startTime}
                                        onChange={startHandler}
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
                                <textarea class="description" id="description_input" name="description"
                                rows="10" cols="50" placeholder="Share something about your event :))" 
                                onChange={(e) => setDescription(e.target.value)}
                                />
                            </label>
                            

                            <p>Upload the graphic of your event here: </p>
                            <input type="file" onChange={dropHandler} />
                            <img src={image} alt={title}/>
                        </form>

                        <button type="submit" onClick={ () => navigateTo("/Home")}>Publish</button>
                        {/* <button type="submit" id="save">Save</button> */}
                    </div>
                </section>
            </div>
        </main>
        </div>
    );
}

