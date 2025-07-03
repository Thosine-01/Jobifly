import { createContext, useState, useEffect } from "react";
import { Jobss } from "../assets/assets";

export const JobContext = createContext();

const JobContextProvider = (props) => {

/*const url = 'https://upwork-jobs-api2.p.rapidapi.com/active-freelance-7d?search=Developer%20OR%20Designer%20OR%20AI&location_filter=Nigeria%20OR%20United%20State%20OR%20United%20Kingdom&limit=1';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '4a5aa4f321msh7212d85dcc619acp14d51djsn4966718e19c3',
		'x-rapidapi-host': 'upwork-jobs-api2.p.rapidapi.com'
	}
};

const fetchJobs = async () => {
try {
	const response = await fetch(url, options);
	const result = await response.json();
	//console.log('result :', result);
} catch (error) {
	console.error(error);
}
};

useEffect(() => {
    //fetchJobs();
})

const [data, setData] = useState([]);
const currency = '$';*/

    const value = {
        Jobss
    }

    return (
        <JobContext.Provider value={value}>
            {props.children}
        </JobContext.Provider>
    )
}

export default JobContextProvider;